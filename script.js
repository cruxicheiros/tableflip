function Part(name, label, options, selectedOption = 0) {
    this.name = name;
    this.label = label;
    this.options = options;
    this.selectedOption = selectedOption;
}

Part.prototype.toString = function () {
    return this.options[this.selectedOption];
};

function Emote() {
    var eyeOptions = ["°", "￣", "｀", "◉", "ರ", "´･", "ಠ", "･", "≧", "≦", "ಥ", "✧", "T", ">", "<", "´", "՞", "ຈ", "⊙", "◔", " ͠°", "ʘ̚", " ͡☉", "≖", "ㅇ","ﹷ", "ꈍ", 'ㅎ']
    this.parts = [
        new Part(
            "bodyLeft",
            "Body Left",
            ["(╯", "ヽ༼", "(┛", "(ﾉ", "(ﾉ*", "ノ", "ヽ(", "(ᕗ", "ᕕ(", ")ᘕ", "ʕ/　", "=^", "/ᐠ"]
        ),
        new Part(
            "leftEye",
            "Left Eye",
            eyeOptions
        ),
        new Part(
            "mouth",
            "Mouth",
            ["□", "Д", "∇", "益", " ~ ","_", " ͜ʖ", " ͜", "ヮ", "_◞", "ᴥ", "◞౪◟", "ɷ", "ω", "▽", "▃", "^", "ﾛ", "㉨"]
        ),
        new Part(
            "rightEye",
            "Right Eye",
            eyeOptions
        ),
        new Part(
            "bodyRight",
            "Body Right",
            ["）╯", "༽ﾉ", ")┛", "(ﾉ", "*)ﾉ", ")ノ", ")ᕗ", "┗( ", "ʔ/", "= ∫", "ᐟ\\ノ", "ᐟ\\ﾉ"]
        ),

        new Part(
            "motionLines",
            "Motion Lines",
            ["︵ ", "彡", "三", "ﾐ", "：・’.：：・"]
        ),
        new Part(
            "table",
            "Table",
            ["┻━┻", "┸━┸", "┬──┬", "┻━━━━┻", "ǝƃɐɹ"]
        )
    ]
}

Emote.prototype.toString = function () {
    return this.parts.join("")
};


function createOption(text, value) {
    var option = document.createElement("option");
    option.value = value;
    option.appendChild(document.createTextNode(text));
    return option;
}

function createSelector(id, options) {
    var selector = document.createElement("select");
    selector.id = id;

    for (let i = 0; i < options.length; i++) {
        selector.appendChild(createOption(options[i], i));
    }

    return selector;
}

function createLabel(forId, text) {
    var label = document.createElement("label");
    label.for = forId;
    label.appendChild(document.createTextNode(text));

    return label;
}


function main() {
    var emote = new Emote();
    var emoteContainer = document.getElementById('emote-container');
    var builderForm = document.getElementById('builder-form');

    for (let part of emote.parts) {
        var formGroup = document.createElement("div");
        var label = createLabel(part.name, part.label);
        var selector = createSelector(part.name, part.options);

        formGroup.appendChild(label);
        formGroup.appendChild(selector);

        builderForm.appendChild(formGroup);

        console.log(selector);
        selector.addEventListener('change', function (e) {
            part.selectedOption = e.target.value;
            emoteContainer.innerText = emote;
        }, false);
    }

    emoteContainer.innerText = emote;
}


document.addEventListener('DOMContentLoaded', main, false);
