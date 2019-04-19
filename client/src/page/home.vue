<template>
    <div class = "wrapper container-fluid rel">
        <client-header 
            :isShowHome = "true"
            :isShowIntroduction = "true"
            :isShowStory = "false"
            :isShowRules = "false"
            :isShowPlay = "false"></client-header>
        <div id = "introduction" class = "introduction-wrapper normal">
            <div class = "content">
                <p class = "title">INTRODUCTION</p>
                <p class = "detail" style = "color: rgba(198, 198, 198, 0.8);">
                    The story of this game is adapted from a murder case which has <br>
                    aroused a lot of discussions on social media during the last two years. There are still many doubts left in this case:
                </p>
                <p class = "detail" style = "color: rgba(198, 198, 198, 0.5);">
                    Did the murder come to visit with the intention to murder?<br>
                    Why did he kill the victim?<br>
                    Did the survivor lock the door?<br>
                    Are the survivor and her family cold-blooded?<br>
                    Is the mother earning money through the death of her daughter?<br>
                    What is the inner relationship between them?<br>
                </p>
                <p class = "detail" style = "color: rgba(198, 198, 198, 0.5);">
                    Netizens separated into several different groups and quarrelled over this, some of them changed sides often.
                </p>
            </div>
        </div>
        <div id = "story" class = "story-wrapper">
            <div class = "content"></div>
        </div>
        <div id = "rules" class = "rules-wrapper normal">
            <div class = "content">
                <p class = "title">HOW TO PLAY?</p>
                <p class = "desc">
                    Your goal is to find out the fact and tell others.<br>
                    Click the comments which you are interested in to watch the videos.<br> 
                </p>
                <p class = "desc">
                    Use<i class = "right"></i>and<i class = "wrong"></i>to mark trustworthy statements and untrustworthy statements respectively.<br>
                    Click<i class = "share"></i>to share and check your answer. <br>
                </p>
                <p class = "desc" style = "margin-bottom: 0;">Are you ready?</p>
                <p class = "desc">
                    <span style = "text-decoration: underline;cursor: pointer;" 
                        @click = "goTo('play')">Yes!</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style = "text-decoration: underline;">
                        No, I want to read the introduction again
                    </span>
                </p>
            </div>
        </div>
        <div class = "special abs">
            <div>
                <p>HOW CAN</p>
                <p>WE</p>
                <p>DISTINGUISH</p>
                <p>RUMORS</p>
                <p>FROM</p>
                <p>FACTS?</p>
            </div>
            <div style = "margin-top: 170px;">
                <p>WHO</p>
                <p>IS</p>
                <p>LYING?</p>
            </div>
        </div>
        <div class = "special abs" style = "top: 195px;">
            <div>
                <p>HOW CAN</p>
                <p>WE</p>
                <p>DISTINGUISH</p>
                <p>RUMORS</p>
                <p>FROM</p>
                <p>FACTS?</p>
            </div>
            <div style = "margin-top: 170px;">
                <p>WHO</p>
                <p>IS</p>
                <p>LYING?</p>
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
    font-family: Arial, Helvetica, sans-serif;

    .special{
        font-size: 255px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: rgba(175, 17, 29, 0.4);
        top: 185px;
        left: 130px;
        filter: blur(10px);

        p{
            line-height: 310px;
        }
    }

    .normal{
        height: 1080px;
        padding-left: 845px;
        display: flex;
        flex-direction: column;
    }

    .introduction-wrapper{
        padding-top: 335px;
        .content{
            .title{
                color: rgba(198, 198, 198, 0.8);
                font-size: 81px;
                font-weight: bold;
                margin-bottom: 45px;
            }

            .detail{
                margin-bottom: 45px;
                line-height: 32px;
                font-size: 21px;
            }
        }
    }
    .story-wrapper{
        height: 1080px;
        display: flex;
        flex-direction: column;
        padding-left: 280px;
        padding-top: 100px;
        .content{
            background-image: url(../assets/images/character/character_bg.png);
            width: 1600px;
            height: 930px;
        }
    }
    .rules-wrapper{
        padding-top: 315px;
        .content{
            .title{
                color: rgba(198, 198, 198, 0.8);
                font-size: 81px;
                font-weight: bold;
                margin-bottom: 45px;
            }

            .desc{
                color: rgba(198, 198, 198, 0.8);
                font-size: 21px;
                font-weight: bold;
                margin-bottom: 45px;
                line-height: 32px;

                i{
                    width: 20px;
                    height: 20px;
                    background-size: contain;
                    display: inline-block;
                    vertical-align: text-top;
                    margin: 0 5px;
                }

                .right{
                    background-image: url(../assets/images/videolist/right.png);

                }

                .wrong{
                    background-image: url(../assets/images/videolist/wrong.png);
                }

                .share{
                    background-image: url(../assets/images/home/share.png);
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
}
</style>
