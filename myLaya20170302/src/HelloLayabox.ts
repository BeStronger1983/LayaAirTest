module laya {
    import Sprite = Laya.Sprite;
    import Text = Laya.Text;
    import WebGL = Laya.WebGL;
    import Event = Laya.Event;

    export class Sprite_Container {
        private m_txt: Text;
        private m_container: Sprite;
        private m_line: Sprite;
        private m_second: number;

        constructor() {
            Laya.init(600, 300, WebGL);
            this.m_txt = new Text();
            this.m_txt.text = "Hello Layabox";
            this.m_txt.color = "#ffffff";
            Laya.stage.addChild(this.m_txt);
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "black";

            this.m_second = 0;
            Laya.timer.loop(1000, this, this.updateSecondByTimer)

            this.createContainer();
            this.drawLine();
        }

        updateSecondByTimer() {
            this.m_second++;
            this.m_txt.text = this.m_second.toString();
        }

        createContainer() {
            this.m_container = new Sprite();
            Laya.stage.addChild(this.m_container);

            for (var i: number = 0; i < 4; i++) {
                var newSprite = new Sprite();
                newSprite.loadImage("res/image.png");
                newSprite.pos(150 * i, 10);
                newSprite.on(Event.CLICK, this, this.onClick, [i]);
                this.m_container.addChild(newSprite);
            }
        }

        onClick(number) {
            console.log("click on image " + number);
        }

        drawLine() {
            this.m_line = new Sprite();
            Laya.stage.addChild(this.m_line);
            this.m_line.graphics.drawLine(10, 58, 146, 58, "#ff0000", 3);
        }
    }
}

new laya.Sprite_Container();
