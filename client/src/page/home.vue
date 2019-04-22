<template>
    <div class = "wrapper rel">
        <client-header 
            :isShowHome = "true"
            :isShowIntroduction = "true"
            :isShowStory = "false"
            :isShowRules = "false"
            :isShowPlay = "false"></client-header>
        <div id = "introduction" class = "normal"></div>
        <div id = "story" class = "normal"></div>
        <div id = "rules" class = "normal"></div>
        <div class = "special abs">
            <div style = "margin-bottom: 80pt;">
                <p>HOW CAN</p>
                <p>WE</p>
                <p style = "margin-bottom: 100pt;">DISTINGUISH</p>
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
                    <span style = "text-decoration: underline;margin-left: 50pt;cursor: pointer;"
                        @click = "goTo('play')">Yes!</span>
                    <span style = "text-decoration: underline;margin-left: 30pt;">
                        No, I want to read the introduction again
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
          }
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper{
    background-color: #000000;

    .special{
        font-size: 255pt;
        font-weight: bold;
        color: rgba(175, 17, 29, 0.7);
        top: 130pt;
        left: 130pt;
        z-index: 2;

        p{
            line-height: 310pt;
            margin-bottom: 0;
        }
    }

    .introduction-wrapper{
        top: 303pt;
        left: 845pt;
        z-index: 3;
        .content{
            .title{
                color: rgba(198, 198, 198, 0.8);
                font-size: 81pt;
                line-height: 81pt;
                height: 81pt;
                font-weight: bold;
                margin-bottom: 27pt;
            }

            .detail{
                margin-bottom: 27pt;
                line-height: 32pt;
                font-size: 27pt;
                font-weight: bold;
            }
        }
    }

    .story-title{
        top: 1330pt;
        left: 145pt;
        color: rgba(198, 198, 198, 0.8);
        font-size: 81pt;
        line-height: 81pt;
        height: 81pt;
        font-weight: bold;
        z-index: 3;
    }

    .story-content{
        top: 1130pt;
        left: 412pt;
        background-image: url(../assets/images/character/character_bg.png);
        width: 1548pt;
        height: 900pt;
        background-size: contain;
        z-index: 1;
    }

    .rules-wrapper{
        top: 2420pt;
        left: 845pt;
        z-index: 3;
        .content{
            .title{
                color: rgba(198, 198, 198, 0.8);
                font-size: 81pt;
                line-height: 81pt;
                height: 81pt;
                font-weight: bold;
                margin-bottom: 25pt;
            }

            .desc{
                color: rgba(198, 198, 198, 0.8);
                font-size: 27pt;
                font-weight: bold;
                margin-bottom: 32pt;
                line-height: 32pt;

                i{
                    width: 25pt;
                    height: 25pt;
                    background-size: contain;
                    display: inline-block;
                    vertical-align: text-top;
                    margin: 0 10pt;
                }

                .right{
                    background-image: url(../assets/images/videolist/right.png);

                }

                .wrong{
                    background-image: url(../assets/images/videolist/wrong.png);
                }

                .share{
                    background-image: url(../assets/images/home/share.png);
                    width: 25pt;
                    height: 25pt;
                }
            }
        }
    }

    .normal{
        height: 1080pt;
    }
}
</style>
