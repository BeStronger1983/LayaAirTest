module laya {
    import Sprite = Laya.Sprite;
    import Text = Laya.Text;

    export class Sprite_Container {
        private m_txt; 
        constructor() {
            Laya.init(600, 300);
            this.m_txt = new Text();
            this.m_txt.text = "Hello Layabox";
            this.m_txt.color = "#ffffff";
            Laya.stage.addChild(this.m_txt);
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "black";
        }
    }
}

new laya.Sprite_Container();
