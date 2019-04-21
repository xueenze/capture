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
        <!-- <div class = "special-content abs">
            <div class = "introduction-wrapper normal">
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
            <div class = "story-wrapper normal">
                <div class = "content"></div>
            </div>
            <div class = "rules-wrapper normal">
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
                    <p class = "desc" style = "margin-bottom: 0;">Are you ready?</p>
                    <p class = "desc">
                        <span style = "text-decoration: underline;">Yes!</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style = "text-decoration: underline;">
                            No, I want to read the introduction again
                        </span>
                    </p>
                </div>
            </div>
        </div> -->
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
        font-size: 255px;
        font-weight: bold;
        color: rgba(175, 17, 29, 0.7);
        top: 185px;
        left: 130px;
        z-index: 2;

        p{
            line-height: 310px;
            margin-bottom: 0;
        }
    }

    .special-content{
        top: 358px;
        left: 845px;
        z-index: 2;
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

    .introduction-wrapper{
        top: 358px;
        left: 845px;
        z-index: 3;
        .content{
            .title{
                color: rgba(198, 198, 198, 0.8);
                font-size: 81px;
                line-height: 81px;
                height: 81px;
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

    .normal{
        height: 1080px;
    }
}
</style>
