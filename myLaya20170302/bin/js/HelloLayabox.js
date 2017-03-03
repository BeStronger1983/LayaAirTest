var laya;
(function (laya) {
    var Text = Laya.Text;
    var Sprite_Container = (function () {
        function Sprite_Container() {
            Laya.init(600, 300);
            this.m_txt = new Text();
            this.m_txt.text = "Hello Layabox";
            this.m_txt.color = "#ffffff";
            Laya.stage.addChild(this.m_txt);
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "black";
        }
        return Sprite_Container;
    }());
    laya.Sprite_Container = Sprite_Container;
})(laya || (laya = {}));
new laya.Sprite_Container();
//# sourceMappingURL=HelloLayabox.js.map