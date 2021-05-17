var namePlayer = "";

cc.Class({
    extends: cc.Component,
    ctor() {
        this.isOpen = false;
    },
    properties: {
        openButton: cc.Node,
        closeButton: cc.Node,
        menuPanel: cc.Node,
    },

    // onLoad () {},

    start() {
      /*   var url = "http://localhost:8080/player/findplayerinfo/3";
        let xhr = new XMLHttpRequest();
        // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // req.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aWVudHVuZyJ9.nq5h80tS1BedMSNr-mZWovUsaVYagnEasseyOr-f5pMvyplnqqfUZjHM3Nlj2LT87CbRXDfiQHX3h2N_QA30fg");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = JSON.parse(xhr.responseText);
                if (response.code == "000") {
                    namePlayer = response.player.namePlayer;
                } else {
                    cc.log(response.message);
                }
            }
        };
        xhr.open("GET", url, false);
        xhr.send(); */

        this.createMenuPanel();

        var content = this.menuPanel.getChildByName("content").children;
        for (var i = 0; i < content.length; i++) {
            content[i].x = content[i].width / 2 - 200;
        }

        for (var i = 0; i < content[0].children[1].childrenCount; i++) {
            content[0].children[1].children[i].x = content[0].children[1].children[i].width / 2 - 130;
        }


    },

    // update (dt) {},

    createMenuPanel() {
        this.createInformationMember();

        this.creatOptionMenu("Quà và lịch sử chơi");
        this.creatOptionMenu("Cập nhật tài khoản");
        this.creatOptionMenu("Đăng xuất");
        this.drawingLine(130);

        this.creatOptionMenu("Trang chủ");
        this.creatOptionMenu("Chương trình và giải thưởng");
        this.creatOptionMenu("Chơi GAME");
        this.creatOptionMenu("Danh sách thắng giải");
        this.creatOptionMenu("Thể lệ chương trình");
        this.drawingLine(-45);

        // this.creatOptionMenu("Kết nối");
        // this.creatOptionMenu("Gửi EMAIL cho chúng tôi");
        // this.creatOptionMenu("Bạn cần hỗ trợ");
        // this.drawingLine(-152);
        this.createConnect();

        this.creatOptionMenu("Phòng dịch vụ khách hàng");
        this.creatOptionMenu("1900 6939 - 1900 234 588");
        this.creatOptionMenu("Địa chỉ: ");
        this.creatOptionMenu("Khai báo sự cố");

    },
    creatOptionMenu(Option) {
        var node = new cc.Node('RichText');
        var label = node.addComponent(cc.RichText);
        label.string = "<size=17><color=black>" + Option + "</color></size>";
        // node.x = 0 - node.width / 2;
        // cc.log(node);

        node.parent = this.menuPanel.getChildByName("content");
    },

    drawingLine(index) {
        var drawing = this.menuPanel.getChildByName("content").getComponent(cc.Graphics);
        drawing.lineWidth = 2;
        // drawing.moveTo(-220, heightPanel * index - 237);
        // drawing.lineTo(500, heightPanel * index - 237);
        drawing.moveTo(-220, index);
        drawing.lineTo(500, index);
        // drawing.strokeColor = cc.Color.RED;
        drawing.stroke();
        // drawing.parent = this.menuPanel.getChildByName("content");
    },

    createInformationMember() {
        var informationLayout = new cc.Node('Information Layout');
        informationLayout.addComponent(cc.Layout);
        informationLayout.getComponent(cc.Layout).type = 1;
        informationLayout.getComponent(cc.Layout)._layoutSize.height = 80;

        var avatarNode = new cc.Node('Avatar Sprite');
        avatarNode.addComponent(cc.Sprite);
        this.setImage(avatarNode, 'Image/avatar')
        avatarNode.getComponent(cc.Sprite).sizeMode = 0;
        avatarNode.setContentSize(cc.size(50, 50));
        avatarNode.parent = informationLayout;

        var detailLayout = new cc.Node('Detail Layout');
        detailLayout.addComponent(cc.Layout);
        detailLayout.getComponent(cc.Layout).type = 2;
        detailLayout.getComponent(cc.Layout).resizeMode = 2;
        detailLayout.getComponent(cc.Layout).spacingY = -30;
        detailLayout.getComponent(cc.Layout)._layoutSize.height = 80;

        var node = new cc.Node('Name');
        var label = node.addComponent(cc.RichText);
        // cc.log("cc " + this.namePlayer);
        label.string = "<size=13><color=black>" + "Xin Chào " + namePlayer + "</color></size>";
        node.parent = detailLayout;

        node = new cc.Node('Last Play');
        var label = node.addComponent(cc.RichText);
        label.string = "<size=12><color=black>" + "<i>Lần chơi gần nhất 20:20 1/1/2021</i>" + "</color></size>";
        node.parent = detailLayout;
        // cc.log(detailLayout.children[0]._trs);
        detailLayout.parent = informationLayout;

        informationLayout.parent = this.menuPanel.getChildByName("content");
        this.drawingLine(235);
    },

    createConnect() {
        var connectLayout = new cc.Node('Connect Layout');
        connectLayout.addComponent(cc.Layout);
        connectLayout.getComponent(cc.Layout).type = 1;
        connectLayout.getComponent(cc.Layout).spacingX = 40;
        connectLayout.getComponent(cc.Layout)._layoutSize.height = 60;

        var networkLayout = new cc.Node('Network Layout');
        networkLayout.addComponent(cc.Layout);
        networkLayout.getComponent(cc.Layout).type = 1;
        networkLayout.getComponent(cc.Layout).spacingX = 5;
        networkLayout.getComponent(cc.Layout)._layoutSize.height = 60;

        var node = new cc.Node('Connect');
        var label = node.addComponent(cc.RichText);
        label.string = "<size=18><color=black>" + "<b>Kết nối</b>" + "</color></size>";
        node.parent = connectLayout;

        var facebookNode = new cc.Node('Facebook Sprite');
        facebookNode.addComponent(cc.Sprite);
        this.setImage(facebookNode, 'Image/facebook')
        facebookNode.getComponent(cc.Sprite).sizeMode = 0;
        facebookNode.setContentSize(cc.size(30, 30));
        facebookNode.parent = networkLayout;

        var zaloNode = new cc.Node('Zalo Sprite');
        zaloNode.addComponent(cc.Sprite);
        this.setImage(zaloNode, 'Image/zalo')
        zaloNode.getComponent(cc.Sprite).sizeMode = 0;
        zaloNode.setContentSize(cc.size(30, 30));
        zaloNode.parent = networkLayout;

        var instagramNode = new cc.Node('Instagram Sprite');
        instagramNode.addComponent(cc.Sprite);
        this.setImage(instagramNode, 'Image/instagram')
        instagramNode.getComponent(cc.Sprite).sizeMode = 0;
        instagramNode.setContentSize(cc.size(30, 30));
        instagramNode.parent = networkLayout;
        networkLayout.parent = connectLayout;
        connectLayout.parent = this.menuPanel.getChildByName("content");

        // this.creatOptionMenu("Kết nối");
        // this.creatOptionMenu("GỬI EMAIL CHO CHÚNG TÔI");
        var emailLayout = new cc.Node('Email Layout');
        emailLayout.addComponent(cc.Layout);
        emailLayout.getComponent(cc.Layout).type = 1;
        emailLayout.getComponent(cc.Layout).spacingX = 10;
        emailLayout.getComponent(cc.Layout)._layoutSize.height = 60;

        var emailNode = new cc.Node('Email Sprite');
        emailNode.addComponent(cc.Sprite);
        this.setImage(emailNode, 'Image/email')
        emailNode.getComponent(cc.Sprite).sizeMode = 0;
        emailNode.setContentSize(cc.size(25, 15));
        emailNode.parent = emailLayout;

        node = new cc.Node('Last Play');
        var label = node.addComponent(cc.RichText);
        label.string = "<size=15><color=#0B9E1F>" + "<b>GỬI EMAIL CHO CHÚNG TÔI</b>" + "</color></size>";
        node.parent = emailLayout;

        emailLayout.parent = this.menuPanel.getChildByName("content");

        node = new cc.Node('Last Play');
        var label = node.addComponent(cc.RichText);
        label.string = "<size=17><color=black>" + "<b>Bạn cần hỗ trợ</b>" + "</color></size>";
        node.parent = this.menuPanel.getChildByName("content");

        // this.creatOptionMenu("Bạn cần hỗ trợ");
        this.drawingLine(-170);

    },

    openMenu() {
        this.openButton.active = false;
        this.closeButton.active = true;
        this.menuPanel.runAction(cc.moveTo(0.5, cc.v2(0, 0)).easing(cc.easeSineOut()));
        // this.menuPanel.active = true;
    },

    closeMenu() {
        this.openButton.active = true;
        this.closeButton.active = false;
        this.menuPanel.runAction(cc.moveTo(0.5, cc.v2(310, 0)).easing(cc.easeSineOut()));
        // this.menuPanel.active = false;
    },

    setImage(node, imgUrl) {
        // load SpriteFrame
        // let listImage = this.node.getComponentsInChildren(cc.Sprite);
        cc.loader.loadRes(imgUrl, cc.SpriteFrame, function (err, spriteFrame) {
            node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
    },
});
