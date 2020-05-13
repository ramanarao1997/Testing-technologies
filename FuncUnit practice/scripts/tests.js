QUnit.module("FuncUnit Practice");

QUnit.test('Using text()', function (assert) {

    // waits until #sample element has text 'I am from HTML'
    // 5000 is max time to wait to keep checking for the condition
    F('#sample').text(' I am from HTML ', 5000, function () {
        F("#sample")[0].innerHTML = "changed inside text()";
        console.log("Hello from inside the callback of text()");
    });

    assert.ok(true);
});



QUnit.test('Actions test', function (assert) {
    // Almost always before performing an action,
    // you should perform a wait that makes sure the element you're operating on is ready.
    // A common pattern to tackle this is calling visible before most actions.

    // click action
    let clickCount = 5;

    for (let i = 0; i < clickCount; i++)
        F("#btn").visible().click();

    // type action 
    F('#textbox2').visible().click().type("Hello World");
    F('#textbox1').visible().click().type("Hello World! each action is queued so next action is called only after this finishes");

    // drag action
    var done = assert.async(2);

    // 50 and 0 are along X and Y axes respectively from the center of range
    F('#myRange').drag('+25 +0', function () {
        let value = "75";

        F('#myRange')[0].value = value;

        assert.ok(value > 0, 'value after dragging 50px should not be at the original position');
        console.log("finished dragging");

        done();
    });

    F("#outputDiv").visible(function () {
        // perform getters inside wait callbacks.
        var size = F(".outputH3").visible().size();

        assert.equal(size, clickCount, "click count and output div size must match");
        console.log("output size matched");

        done();
    });

    // open action
    F.open('demo.html');

    assert.ok(true, "Last assert");
});



QUnit.test("testing with width() and find()", function (assert) {
    F("#container").width(500).click().find("#tempText").click();

    console.log("changed tempText using find()");

    assert.ok(1);
});



// F method with function
F("#tempText").visible();

// Run after the previous wait completes
F(function () {
    F("#tempText").click();
    console.log("changed tempText using F method");
})