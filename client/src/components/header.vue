<template>
    <div class = "wrapper">
        <div class = "fix header-wrapper">
            <a href="javascript:;" class = "home" @click = "headerClick('home')"></a>
            <div class = "other-buttons">
                <a href="javascript:;" :class = "['introduction normal', isShowHeaderIntroduction ? 'introduction-show' : '']" 
                    @click = "headerClick('introduction')"></a>
                <a href="javascript:;" :class = "['story normal', isShowHeaderStory ? 'story-show' : '']"
                     @click = "headerClick('story')"></a>
                <a href="javascript:;" :class = "['rules normal', isShowHeaderRules ? 'rules-show' : '']" 
                    @click = "headerClick('rules')"></a>
                <a href="javascript:;" :class = "['play normal', isShowPlay ? 'play-show' : '']" 
                    @click = "headerClick('play')"></a>
            </div>
        </div>
        <div class = "step-wrapper fix" v-show = "isShowStep">
            <a href="javacript:;" :class = "{hover: isShowHeaderIntroduction}"
                 @click = "headerClick('introduction')"></a>
            <a href="javacript:;" :class = "{hover: isShowHeaderStory}"
                @click = "headerClick('story')"></a>
            <a href="javacript:;" :class = "{hover: isShowHeaderRules}"
                @click = "headerClick('rules')"></a>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'isShowHome', 'isShowIntroduction', 'isShowStory', 'isShowRules', 'isShowPlay'
    ],
    data() {
        return {
            isShowHeaderHome: this.isShowHome,
            isShowHeaderIntroduction: this.isShowIntroduction,
            isShowHeaderStory: this.isShowStory,
            isShowHeaderRules: this.isShowRules,
            isShowHeaderPlay: this.isShowPlay,
            isShowStep: !this.isShowPlay
        }
    },
    mounted() {
        // 监控当前的滚动事件
        window.addEventListener('scroll', () => {
            if (this.$route.name == 'home') {
                if ($(window).scrollTop() < 720) {
                    this.isShowStep = this.isShowHeaderHome = this.isShowHeaderIntroduction = true;
                    this.isShowHeaderStory = this.isShowHeaderRules = this.isShowHeaderPlay = false;
                } else if ($(window).scrollTop() >= 720 && $(window).scrollTop() < 720 * 3) {
                    this.isShowStep = this.isShowHeaderStory = true;
                    this.isShowHeaderHome = this.isShowHeaderIntroduction = this.isShowHeaderRules = this.isShowHeaderPlay = false;
                } else {
                    this.isShowStep = this.isShowHeaderRules = true;
                    this.isShowHeaderHome = this.isShowHeaderIntroduction = this.isShowHeaderStory = this.isShowHeaderPlay = false;
                }
            }
        });
    },
    methods: {
        /**
         * 标题点击
         */
        headerClick(key) {
            switch(key) {
                case 'home':
                    this.$router.push({ path: '/home' });
                    this.isShowStep = this.isShowHeaderHome = this.isShowHeaderIntroduction = true;
                    this.isShowHeaderStory = this.isShowHeaderRules = this.isShowHeaderPlay = false;
                    $("html, body").animate({scrollTop: 0}, {duration: 500,easing: "swing"});
                    return;
                case 'introduction':
                    this.$router.push({ path: '/home' });
                    this.isShowStep = this.isShowHeaderHome = this.isShowHeaderIntroduction = true;
                    this.isShowHeaderStory = this.isShowHeaderRules = this.isShowHeaderPlay = false;
                    $("html, body").animate({scrollTop: 0}, {duration: 500,easing: "swing"});
                    return;
                case 'story':
                    this.$router.push({ path: '/home' });
                    this.isShowStep = this.isShowHeaderStory = true;
                    this.isShowHeaderHome = this.isShowHeaderIntroduction = this.isShowHeaderRules = this.isShowHeaderPlay = false;
                    $("html, body").animate({scrollTop: 1353}, {duration: 500,easing: "swing"});
                    return;
                case 'rules':
                    this.$router.push({ path: '/home' });
                    this.isShowStep = this.isShowHeaderRules = true;
                    this.isShowHeaderHome = this.isShowHeaderIntroduction = this.isShowHeaderStory = this.isShowHeaderPlay = false;
                    $("html, body").animate({scrollTop: 2775}, {duration: 500,easing: "swing"});
                    return;
                case 'play':
                    this.isShowHeaderPlay = true;
                    this.isShowStep = this.isShowHeaderHome = this.isShowHeaderIntroduction = this.isShowHeaderStory = this.isShowHeaderRules = false;
                    this.$router.push({ path: '/videolist' });
                    return;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .wrapper{
        .header-wrapper{
            top: 0;
            left: 0;
            width: 100%;
            height: 100/100rem ;
            background-color: #000000;
            z-index: 999;
            padding-left: 55/100rem ;
            display: flex;
            flex-direction: row;
            align-items: center;
            box-shadow: 0/100rem  4/100rem  20/100rem  1/100rem ;

            .home{
                background-image: url(../assets/images/header/home.png);
                background-repeat: no-repeat;
                width: 790/100rem ;
                height: 25/100rem ;
                background-size: contain;
                flex-shrink: 0;
            }

            .other-buttons{
                display: flex;

                .normal{
                    background-repeat: no-repeat;
                    width: 85/100rem ;
                    height: 20/100rem ;
                    background-size: contain;
                    margin-right: 195/100rem ;
                }

                .introduction{
                    background-image: url(../assets/images/header/introduction.png);
                    &:hover{
                        background-image: url(../assets/images/header/introduction_hover.png);
                    }
                    &-show{
                        background-image: url(../assets/images/header/introduction_hover.png);
                    }
                }

                .story{
                    background-image: url(../assets/images/header/story.png);
                    &:hover{
                        background-image: url(../assets/images/header/story_hover.png);
                    }
                    &-show{
                        background-image: url(../assets/images/header/story_hover.png);
                    }
                }

                .rules{
                    background-image: url(../assets/images/header/rules.png);
                    &:hover{
                        background-image: url(../assets/images/header/rules_hover.png);
                    }
                    &-show{
                        background-image: url(../assets/images/header/rules_hover.png);
                    }
                }

                .play{
                    background-image: url(../assets/images/header/play.png);
                    &:hover{
                        background-image: url(../assets/images/header/play_hover.png);
                    }
                    &-show{
                        background-image: url(../assets/images/header/play_hover.png);
                    }
                }
            }
        }

        .step-wrapper{
            top: 50%;
            transform: translateY(-50%);
            left: 55/100rem ;
            width: 20/100rem ;
            z-index: 999;

            a{
                width: 20/100rem ;
                height: 20/100rem ;
                margin-bottom: 15/100rem ;
                border-radius: 20/100rem ;
                background-color: rgba(255, 255, 255, 0.15);
                display: inline-block;
            }

            .hover{
                background-color: rgba(255, 255, 255, 0.4);
            }
        }
    }

</style>
