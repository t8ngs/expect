/*
 * @t8ngs/expect
 *
 * (c) T8ngs
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expect as jestExpect } from 'expect'
import type { PluginFn } from '@t8ngs/runner/types'
import { Test, TestContext } from '@t8ngs/runner/core'

/**
 * Expect plugin for "@t8ngs/runner"
 */
export function expect(): PluginFn {
  return function () {
    TestContext.getter('expect', () => jestExpect, true)

    Test.executed(function (test, hasError) {
      /**
       * Must call this whether or not the test passed because internally it
       * resets the assertion count and otherwise the assertion count will be
       * carried into a subsequent test
       */
      const jestErrors = jestExpect.extractExpectedAssertionsErrors()

      /**
       * Do not evaluate expectations counts for regression tests.
       */
      if (test.options.isFailing) {
        return
      }

      /**
       * Throw assertion count errors only if the test otherwise passed
       */
      if (jestErrors.length && !hasError) {
        throw jestErrors[0].error
      }
    })
  }
}

declare module '@t8ngs/runner/core' {
  interface TestContext {
    expect: typeof jestExpect
  }
}
