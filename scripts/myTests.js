QUnit.module("Basic Asserts");

// -------------------- OK -----------------------
QUnit.test("Ok tests", function (assert) {
    assert.ok(1, "Truthy!");
    assert.ok([], "Truthy!");
    assert.ok("hello", "Truthy!");
    assert.ok(true, "Truthy!");


    assert.ok(0, "Falsy!");
    assert.ok(null, "Falsy!");
    assert.ok(undefined, "Falsy!");
    assert.ok("", "Falsy!")
    assert.ok(false, "Falsy!");
});


// -------------------- EQUAL -----------------------
QUnit.test("Equal / Strict equal / Deep equal tests", function (assert) {

    // Equal
    assert.ok(1 == "1", "== using ok");
    assert.equal(1, '1', "== using equal");

    // Strict Equal
    assert.ok(1 === '1', "=== using ok");
    assert.strictEqual(1, '1', "=== using strictEqual");

    assert.ok('1' === '1', "=== using ok");
    assert.strictEqual("1", "1", "=== using strictEqual");

    // Deep Equal
    assert.deepEqual([1, 2, 3], [4, 5, 6], "Array equality fails using deepEqual");
    assert.deepEqual([1, 2, 3], [1, 2, 3], "Equal arrays using deep equal");

    //not equal
    assert.notEqual(1, '0', "using notEqual");

    //not StrictEqual
    assert.notStrictEqual("1", 1, "using notStrictEqual")

    // not deepEqual
    assert.notDeepEqual([1, 2, 3], [1, 2, "3"], "using notDeepEqual")
});


// -------------------- Global variables -----------------------
QUnit.module("Global variable test");
QUnit.test("Used global variables", function (assert) {

    globalVar = true;

    assert.ok(globalVar, "Global variable");
});


// -------------------- Checking modules -----------------------

// var getSum = function (num1, num2) {
//     return parseInt(num1) + parseInt(num2);
// }

QUnit.module("Module test");
QUnit.test("Should add correctly", function (assert) {

    // use expect to specify the number of asserts expected
    assert.expect(1);

    var expected = getSum("2", "5");
    var returned = 7;

    assert.equal(expected, returned, "Addition should give correct output");
});


QUnit.test("Should check even numbers correctly", function (assert) {

    assert.expect(3);

    assert.ok(isEven(50), "Should pass as 50 is even");
    assert.ok(isEven(16), "Should pass as 16 is even");
    assert.notEqual(isEven(63), true, "Should pass as 63 is not even");

});


// -------------------- Aync Tests -----------------------

QUnit.module("Async tests");

// Fails as the assertion occurs after the test has finished
// QUnit.test("setTimeout test incorrect way", function (assert) {
//     assert.expect(1);

//     setTimeout(function () {
//         assert.ok(true, "test passed");
//     }, 1000);
// });

// Passes
QUnit.test("setTimeout test correct way", function (assert) {
    var done = assert.async(2);

    setTimeout(function () {
        assert.ok(true, "async test-1 passed");
        done();
    }, 3000);

    setTimeout(function () {
        assert.ok(true, "async test-2 passed");
        done();
    }, 2000);
});