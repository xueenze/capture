<template>
    <div class = "fix header-wrapper">
        <div class = "header-content rel">
            <a href="javascript:;" class = "home abs" @click = "headerClick('home')"></a>
            <a href="javascript:;" class = "introduction abs" @click = "headerClick('introduction')"></a>
            <a href="javascript:;" class = "character abs" @click = "headerClick('character')"></a>
            <a href="javascript:;" class = "camera abs" @click = "headerClick('camera')" v-show = "!isShowUserlist"></a>
            <a href="javascript:;" class = "userlist abs" @click = "headerClick('videolist')" v-show = "isShowUserlist"></a>
            <a href="javascript:;" class = "back abs" @click = "headerClick('back')"></a>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'isShowHome', 'isShowIntroduction', 'isShowCharacter',
        'isShowVideolist', 'isShowUserlist'
    ],
    data() {
        return {}
    },
    methods: {
        /**
         * 标题点击
         */
        headerClick(key) {
            switch(key) {
                case 'home':
                    this.$router.push({ path: '/home' });
                    $("html, body").animate({scrollTop: 0}, {duration: 500,easing: "swing"});
                    return;
                case 'introduction':
                    $("html, body").animate({scrollTop: $(window).height()}, {duration: 500,easing: "swing"});
                    return;
                case 'character':
                    $("html, body").animate({scrollTop: $(window).height() * 2}, {duration: 500,easing: "swing"});
                    return;
                case 'camera':
                    if (this.isShowVideolist) {
                        this.$emit('capture');
                    } else {
                        this.$router.push({ path: '/videolist' });
                    }
                    return;
                case 'userlist':
                    this.$router.push({ path: '/userlist' });
                    return;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .header-wrapper{
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: rgba(230, 230, 230, 0.1);
        z-index: 999;

        .header-content{
            .home{
                background-image: url(../assets/images/header/home.png);
                background-repeat: no-repeat;
                width: 30px;
                height: 30px;
                background-size: contain;
                left: 30px;
                top: 10px;
            }

            .introduction{
                background-image: url(../assets/images/header/introduction.png);
                background-repeat: no-repeat;
                width: 30px;
                height: 30px;
                background-size: contain;
                right: 270px;
                top: 10px;
            }

            .character{
                background-image: url(../assets/images/header/character.png);
                background-repeat: no-repeat;
                width: 30px;
                height: 30px;
                background-size: contain;
                right: 190px;
                top: 10px;
            }

            .camera{
                background-image: url(../assets/images/header/camera.png);
                background-repeat: no-repeat;
                width: 30px;
                height: 30px;
                background-size: contain;
                right: 110px;
                top: 10px;
            }

            .userlist{
                background-image: url(../assets/images/header/videolist.png);
                background-repeat: no-repeat;
                width: 30px;
                height: 30px;
                background-size: contain;
                right: 110px;
                top: 10px;
            }

            .back{
                background-image: url(../assets/images/header/back.png);
                background-repeat: no-repeat;
                width: 30px;
                height: 30px;
                background-size: contain;
                right: 30px;
                top: 10px;
            }
        }
    }
</style>
