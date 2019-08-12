<template>
    <div class = "wrapper rel">
        <client-header ref = "header"
            :isShowHome = "true"
            :isShowIntroduction = "true"
            :isShowStory = "false"
            :isShowRules = "false"
            :isShowPlay = "false"></client-header>
        <div id = "introduction" class = "normal"></div>
        <div id = "story" class = "normal"></div>
        <div id = "rules" class = "normal"></div>
        <div class = "special abs">
            <div style = "margin-bottom: 80/100rem;">
                <p>HOW CAN</p>
                <p>WE</p>
                <p style = "margin-bottom: 100/100rem;">DISTINGUISH</p>
                <p>RUMORS</p>
                <p>FROM</p>
                <p>FACTS?</p>
            </div>
            <div>
                <p>WHO</p>
                <p>IS</p>
                <p>LYING?</p>
            </div>
        </div>
        <div class = "introduction-wrapper abs">
            <div class = "content">
                <p class = "title">INTRODUCTION</p>
                <p class = "detail" style = "color: rgba(198, 198, 198, 0.8);">
                    The story of this game is adapted from a murder case which has given <br>
                    rise to a lot of discussion on social media during the last two years.<br>
                    There are still many uncertainties left in this case:
                </p>
                <p class = "detail" style = "color: rgba(198, 198, 198, 0.5);">
                    Did the murderer come to visit with the intention to kill?<br>
                    Why did he kill the victim?<br>
                    Did the survivor lock the door? <br>
                    Are the survivor and her family cold-blooded?<br>
                    Is the mother earning money from the death of her daughter?<br>
                    What is the internal relationship between them?<br>
                </p>
                <p class = "detail" style = "color: rgba(198, 198, 198, 0.5);">
                    Netizens separated into several different groups and quarreled over this,<br>
                    some of them changed sides often.
                </p>
            </div>
        </div>
        <p class = "story-title abs">STORY</p>
        <div class = "story-content abs"></div>
        <div class = "rules-wrapper abs">
            <div class = "content">
                <p class = "title">HOW TO PLAY?</p>
                <p class = "desc">
                    Your goal is to find out the fact and tell others.<br>
                    Click the comments you are interested in to watch the videos.<br> 
                </p>
                <p class = "desc">
                    Use<i class = "right"></i>and<i class = "wrong"></i>to mark trustworthy statements and untrustworthy<br>
                    statements respectively.<br>
                    Click<i class = "share"></i>to share and check your answer. <br>
                </p>
                <p class = "desc" style = "margin-bottom: 0;">
                    Are you ready?
                    <span @click = "goTo('play')">Yes!</span>
                    <span @click = "goTo('home')">
                        No, I want to read the introduction again.
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import header from '@/components/header';

export default {
    components: {
        'client-header': header
    },
    data() {
        return {
        };
    },
    methods: {
        /**
         * 跳转
         */
        goTo(type) {
          switch(type) {
            case 'play':
              this.$router.push({ path: '/videolist' });
              break;
            case 'home':
              this.$refs.header.headerClick('home');
              break;
          }
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper{
    background-color: #000000;

    .special{
        font-size: 255/100rem;
        font-weight: bold;
        color: rgba(175, 17, 29, 0.7);
        top: 130/100rem;
        left: 130/100rem;
        z-index: 2;

        p{
            line-height: 310/100rem;
            margin-bottom: 0;
        }
    }

    .introduction-wrapper{
        top: 304/100rem;
        left: 845/100rem;
        z-index: 3;
        .content{
            .title{
                color: rgba(198, 198, 198, 0.8);
                font-size: 81/100rem;
                line-height: 81/100rem;
                height: 81/100rem;
                font-weight: bold;
                margin-bottom: 28/100rem;
            }

            .detail{
                margin-bottom: 28/100rem;
                line-height: 32/100rem;
                font-size: 27/100rem;
                font-weight: bold;
            }
        }
    }

    .story-title{
        top: 1234/100rem;
        left: 145/100rem;
        color: rgba(198, 198, 198, 0.8);
        font-size: 81/100rem;
        line-height: 81/100rem;
        height: 81/100rem;
        font-weight: bold;
        z-index: 3;
    }

    .story-content{
        top: 1035/100rem;
        left: 412/100rem;
        background-image: url(../assets/images/character/character_bg.png);
        width: 1548/100rem;
        height: 900/100rem;
        background-size: contain;
        z-index: 1;
    }

    .rules-wrapper{
        top: 2320/100rem;
        left: 845/100rem;
        z-index: 3;
        .content{
            .title{
                color: rgba(198, 198, 198, 0.8);
                font-size: 81/100rem;
                line-height: 81/100rem;
                height: 81/100rem;
                font-weight: bold;
                margin-bottom: 25/100rem;
            }

            .desc{
                color: rgba(198, 198, 198, 0.8);
                font-size: 27/100rem;
                font-weight: bold;
                margin-bottom: 32/100rem;
                line-height: 32/100rem;

                i{
                    width: 25/100rem;
                    height: 25/100rem;
                    background-size: contain;
                    display: inline-block;
                    vertical-align: text-bottom;
                    margin: 0 10/100rem;
                    background-repeat: no-repeat;
                    box-sizing: content-box;
                }

                .right{
                    background-image: url(../assets/images/videolist/right.png);
                    padding-bottom: 2/100rem;
                }

                .wrong{
                    background-image: url(../assets/images/videolist/wrong.png);
                    padding-bottom: 2/100rem;
                }

                .share{
                    background-image: url(../assets/images/home/share.png);
                    width: 30/100rem;
                    height: 30/100rem;
                    opacity: 0.8;
                    margin-right: 8/100rem;
                }

                span{
                    text-decoration: underline;
                    margin-left: 30/100rem;
                    cursor: pointer;
                }
            }
        }
    }

    .normal{
        height: 1080/100rem;
    }
}
</style>
