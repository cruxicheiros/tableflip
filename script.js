function Emote(bodyLeft, leftEye, mouth, rightEye, bodyRight, motionLines, table) {
    this.bodyLeft = bodyLeft;
    this.leftEye = leftEye;
    this.mouth = mouth;
    this.rightEye = rightEye;
    this.bodyRight = bodyRight;
    this.motionLines = motionLines;
    this.table = table;
}

Emote.prototype.toString = function () {
    return this.bodyLeft + this.leftEye + this.mouth + this.rightEye + this.bodyRight + this.motionLines + this.table;
};

function createOption(text) {
    var option = document.createElement("option");
    option.value = text;
    option.appendChild(document.createTextNode(text));
    return option;
}

function main() {
    var partOptions = {
        leftEye: ["°", "￣", "｀", "◉", "ರ", "´･", "ಠ", "･", "≧", "≦", "ಥ", "✧", "T", ">", "<", "´", "՞", "ຈ", "⊙", "◔", " ͠°", "ʘ̚", " ͡☉", "≖", "ㅇ","ﹷ", "ꈍ", 'ㅎ'],
        rightEye: ["°", "￣", "｀", "◉", "ರ", "´･", "ಠ", "･", "≧", "≦", "ಥ", "✧", "T", ">", "<", "´", "՞", "ຈ", "⊙", "◔", " ͠°", "ʘ̚", " ͡☉", "≖", "ㅇ","ﹷ", "ꈍ", 'ㅎ'],
        mouth: ["□", "Д", "∇", "益", " ~ ","_", " ͜ʖ", " ͜", "ヮ", "_◞", "ᴥ", "◞౪◟", "ɷ", "ω", "▽", "▃", "^", "ﾛ", "㉨"],
        bodyLeft: ["(╯", "ヽ༼", "(┛", "(ﾉ", "(ﾉ*", "ノ", "ヽ(", "(ᕗ", "ᕕ(", ")ᘕ", "ʕ/　", "=^", "/ᐠ"],
        bodyRight: ["）╯", "༽ﾉ", ")┛", "(ﾉ", "*)ﾉ", ")ノ", ")ᕗ", "┗( ", "ʔ/", "= ∫", "ᐟ\\ノ", "ᐟ\\ﾉ"],
        motionLines: ["︵ ", "彡", "三", "ﾐ", "：・’.：：・"],
        table: ["┻━┻", "┸━┸", "┬──┬", "┻━━━━┻"]
    };

    var defaultEmoteText = ["(╯","°","□","°","）╯","︵ ","┻━┻"];
    var emote = new Emote(...defaultEmoteText);

    var emoteContainer = document.getElementById('emote-container');
    var selectors = document.getElementById('builder-form').getElementsByTagName('select');

    for (let selector of selectors) {
        for (let part of partOptions[selector.id]) {
            selector.appendChild(createOption(part))
        }

        document.addEventListener('change', function () {
            emote[selector.id] = selector.value;
            emoteContainer.innerText = emote;
        }, false);
    }

    emoteContainer.innerText = emote;
}


document.addEventListener('DOMContentLoaded', main, false);
