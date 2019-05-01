<template>
  <div class="video-list-wrapper container-fluid">
    <client-header
      :isShowHome="false"
      :isShowIntroduction="false"
      :isShowStory="false"
      :isShowRules="false"
      :isShowPlay="true"
    ></client-header>
    <div id="videoList" class="video-list container-fluid">
      <div class="row" v-for="(rowItem, rowIndex) in videoListShow" :key="rowIndex">
        <div
          class="col-md-3 video-item rel"
          v-for="(columnItem, columnIndex) in rowItem"
          :key="columnIndex"
        >
          <div class="content rel" @click="clickItem(rowIndex, columnIndex)">
            <div class="cover abs" v-show="!columnItem.isClick">
              <!-- 蒙版默认内容-->
              <div class="media cover-default rel">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" :src="columnItem.name | avaterSrc" alt="...">
                  </a>
                </div>
                <div class="media-body rel">
                  <div class="desc abs">
                    <p class="title">{{columnItem.name}}</p>
                    <p class="detail" v-html="columnItem.detail"></p>
                  </div>
                </div>
                <i class="content-shadow abs"></i>
              </div>
            </div>
            <video webkit-playsinline playsinline x5-video-player-fullscreen="true" x5-video-player-type="h5" 
              :id = "columnItem.id" preload="none"
              class="abs" v-show="columnItem.isClick" :src="columnItem.src" loop="loop"></video>
            <div class = "video-modal" v-show="columnItem.isShowVideoOperate">
              <i class = "video-mask abs"></i>
              <i class = "wrong abs" v-show="columnItem.isShowWrong"
                @click.stop = "videoClick(rowIndex, columnIndex, false)"></i>
              <i class = "right abs" v-show="columnItem.isShowRight"
                @click.stop = "videoClick(rowIndex, columnIndex, true)"></i>
              <i :class = "['result abs', columnItem.operateResult ? 'result-right' : 'result-wrong']"
                v-show="columnItem.operateResult != -1"></i>
            </div>
          </div>
          <div class = "abs content-mask" v-show = "!columnItem.isClick"></div>
        </div>
      </div>
    </div>
    <div class = "capture-icon fix" @click = "capture">
      <div class = "rel">
        <i class = "abs"></i>
        <div class = "capture-icon-mask abs"></div>
      </div>
    </div>
    <canvas id="canvas" class="video-canvas"/>
    <!-- 页面整体蒙版 -->
    <div class = "mask" v-show = "isShowMask">
      <i class = "rotate-infinite"></i>
    </div>
    <!-- 截图确认层 -->
    <!-- <div id="captureWrapper" class="modal fade">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">截图内容</h4>
          </div>
          <div class="modal-body">
            <div class="alert alert-info" role="alert" v-show="captureLoadingStatus == 0">截图上传中，请稍后...</div>
            <div class="alert alert-success" role="alert" v-show="captureLoadingStatus == 1">截图上传成功!</div>
            <div class="alert alert-danger" role="alert" v-show="captureLoadingStatus == 2">截图上传失败!</div>
            <img :src="captureSrc" alt style="width: 100%;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" 
              @click = "goTo('videolist')" v-show="captureLoadingStatus == 1">跳转视频列表</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>

import html2canvas from 'html2canvas';
import { mockData } from '@/utils/config';

import header from '@/components/header';

require('../assets/images/chenshifeng.png');
require('../assets/images/jiangqiulian.png');
require('../assets/images/liuxin.png');
require('../assets/images/police.png');
require('../assets/images/netizen.png');

export default {
    components: {
        'client-header': header
    },
    data() {
        return {
            isShowMask: false,
            videoList: [],
            captureSrc: '',
            captureLoadingStatus: 0 //0:上传中 1:成功 2:失败
        }
    },
    computed: {
        // 转换成二维数组
        videoListShow() {
          let list = [];

          let rows =  Math.ceil(this.videoList.length / 4);
          let size = this.videoList.length;

          for (let row = 0;row < rows;row++) {
              list.push([]);
              for (let i = row * 4;i < (row + 1) * 4 && i < size;i++) {
                let column = i % 4;
                list[row][column] = this.videoList[i];
              }
          }

          return list;
        }
    },
    mounted() {
        $("html, body").animate({scrollTop: 0}, {duration: 200,easing: "swing"});
        this.init();
    },
    methods: {
        init() {
            this.videoList = [];
            mockData.videoList.forEach(item => {
                this.videoList.push(Object.assign(
                    {}, item, { 
                        id: `video-${item.id}`,
                        name: item.name,
                        detail: item.detail,
                        isClick: false,
                        isShowVideoOperate: false,
                        isShowWrong: false,
                        isShowRight: false,
                        operateResult: -1
                    }))
            });
        },

        /**
         * 截图核心代码
         * 在视频标签上生成一个当前帧的临时图片
         */
        async capture() {
            this.captureLoadingStatus = 0;
            this.isShowMask = true;

            setTimeout(() => {
                let canvas = document.getElementById('canvas');
                let ctx = canvas.getContext('2d');
                let videos = document.querySelectorAll('video');
                let w, h
                for (let i = 0, len = videos.length; i < len; i++) {
                    const v = videos[i]
                    if (!v.src) continue;
                    // 如果视频没有在播放则跳过
                    if (v.currentTime == 0) continue;
                    try {
                        w = v.videoWidth
                        h = v.videoHeight
                        canvas.width = w
                        canvas.height = h
                        ctx.fillRect(0, 0, w, h)
                        ctx.drawImage(v, 0, 0, w, h)
                        v.style.backgroundImage = `url(${canvas.toDataURL()})`;
                        v.style.backgroundSize = 'contain';
                        v.style.backgroundRepeat = 'no-repeat';
                        v.style.backgroundPosition = 'center';
                        ctx.clearRect(0, 0, w, h); // 清空画板
                    } catch (e) {
                        console.log(e);
                        continue;
                    }
                }

                let videoList = document.getElementById('videoList');

                html2canvas(videoList).then(async (canvas) => {
                    this.captureSrc = canvas.toDataURL();
                    await this.submitCapture();
                    this.isShowMask = false;
                    // 直接跳转至截图列表
                    this.goTo('videolist');
                    // $('#captureWrapper').modal('show');
                });
            }, 0);
        },

        /**
         * 选项点击
         */
        clickItem(rowIndex, columnIndex) {
            let index = rowIndex * 4 + columnIndex;
            this.videoList[index].isClick = true;
            this.videoList[index].isShowVideoOperate = true;
            this.videoList[index].isShowWrong = true;
            this.videoList[index].isShowRight = true;

            this.$nextTick(() => {
                const id = this.videoList[index].id;
                const currenVideo = document.getElementById(id);
                currenVideo.play();
            });
        },

        /**
         * 视频操作点击
         */
        videoClick(rowIndex, columnIndex, flag) {
          let index = rowIndex * 4 + columnIndex;
          console.log(index);
          // this.videoList[index].isShowWrong = false;
          // this.videoList[index].isShowRight = false;
          this.videoList[index].operateResult = flag ? 1 : 0;
        },

        /**
         * 提交表单
         */
        async submitCapture() {
            try {
                let res = await this.$apiAxios.post('/comment/comment-post', {
                    username: new Date().getTime(),
                    capture: this.captureSrc
                });

                if (res.data.code == 1) {
                    this.captureLoadingStatus = 1;
                } else {
                    this.captureLoadingStatus = 2;
                    console.log(res.data.msg);
                }
            } catch(e) {
                console.log(e);
            }
        },

        /**
         * 跳转
         */
        goTo(type) {
          switch(type) {
            case 'videolist':
              this.$router.push({ path: '/userlist' });
              break;
          }
        }
    },
    filters: {
      avaterSrc: function(name) {
        switch(name) {
          case 'Chen Shifeng': 
            return 'imgs/chenshifeng.png';
          case 'Jiang Qiulian':
            return 'imgs/jiangqiulian.png';
          case 'Liu Xin':
            return 'imgs/liuxin.png';
          case 'Police':
            return 'imgs/police.png';
          case 'Netizen':
            return 'imgs/netizen.png';
        }
      }
    }
}
</script>

<style lang="less" scoped>
    @keyframes rotate{
      from{-webkit-transform: rotate(0deg)}
      to{-webkit-transform: rotate(360deg)}
    }

    .rotate-infinite{
      transform-origin: center;
      animation: rotate 2s linear infinite;
    }

    .video-list-wrapper{
        background-color: #000000;
        min-width: 1920px;

        .mask{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);

          i{
            background-image: url(../assets/images/videolist/loading.png);
            display: block;
            width: 160px;
            height: 160px;
            margin: 380px auto 0;
            background-size: cover;
            opacity: 0.5;
          }
        }

        .capture-icon{
          height: 80px;
          width: 80px;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          i{
            display: inline-block;
            background-image: url(../assets/images/home/share.png);
            width: 40px;
            height: 40px;
            background-size: contain;
            top: 20px;
            left: 20px;
            opacity: 0.3;
          }

          &-mask{
            width: 80px;
            height: 80px;
            background-color: rgba(255,255,255,0.3);
            z-index: 2;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            opacity: 0.25;
          }
        }

        .video-list{
            margin-top: 140px;
            background-color: #000000;
        
        .video-item{
            margin: 15px;
            width: 442.5px;
            padding: 0;
            display:inline-block;

            .content{
                height: 250px;
                border-radius: 10px;
                color: #ffffff;

                .cover{
                    width: 100%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    .cover-default{
                      .media-left{
                        padding-right: 15px;
                        a{
                          display: inline-block;
                          img{
                              width: 150px;
                              height: 150px;
                          }
                        }
                      }

                      .media-body{
                        .desc{
                            top: 19px;
                            .title{
                              font-size: 18px;
                              color: rgba(136, 136, 136, 0.8);
                              margin-bottom: 12px;
                            }

                            .detail{
                              font-size: 21px;
                              color: rgba(198, 198, 198, 0.8);
                              line-height: 25px;
                              word-break: break-all;
                              white-space: nowrap;
                            }
                        }
                      }

                      .content-shadow{
                          background-image: url(../assets/images/videolist/content_shadow.png);
                          width: 100%;
                          height: 260px;
                          background-position: center -45px;
                          background-repeat: no-repeat;
                          background-size: cover;
                          top: 0;
                        }
                    }
                }

                .video-modal{
                  .video-mask{
                    background-image: url(../assets/images/videolist/video_mask.png);
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                  }

                  .wrong{
                    background-image: url(../assets/images/videolist/wrong.png);
                    width: 25px;
                    height: 25px;
                    background-size: cover;
                    left: 35px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;

                    &:hover{
                      background-image: url(../assets/images/videolist/wrong_cover.png);
                    }
                  }

                  .right{
                    background-image: url(../assets/images/videolist/right.png);
                    width: 25px;
                    height: 25px;
                    background-size: cover;
                    right: 35px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;

                    &:hover{
                      background-image: url(../assets/images/videolist/right_cover.png);
                    }
                  }

                  .result-right {
                    background-image: url(../assets/images/videolist/right.png);
                    opacity: 0.9;
                  }

                  .result-wrong {
                    background-image: url(../assets/images/videolist/wrong.png);
                    opacity: 0.8;
                  }

                  .result{
                    width: 200px;
                    height: 200px;
                    background-size: contain;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  }
                }

                video{
                    top: 50%;
                    transform: translateY(-50%);
                    width: 100%;
                    height: 100%;
                }

                video::-webkit-media-controls-fullscreen-button {
                  display: none !important;
                }
                video::-webkit-media-controls-play-button {
                  display: none !important;
                }
                video::-webkit-media-controls-timeline {
                  display: none !important;
                }
                video::-webkit-media-controls-current-time-display{
                  display: none !important;
                }
                video::-webkit-media-controls-time-remaining-display {
                  display: none !important;
                }
                video::-webkit-media-controls-mute-button {
                  display:  !important;
                }
                video::-webkit-media-controls-toggle-closed-captions-button {
                  display: none !important;
                }
                video::-webkit-media-controls-volume-slider {
                  display: none !important;
                }

                video::-webkit-media-controls {
                  display:none !important;
                }
            }

            .content-mask{
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(0,0,0, 0.6);
            }

            &:hover{
              .content-mask{
                display: none;
              }

              .content-shadow{
                display: none;
              }
            }
        }
    }

    .video-canvas{
        display: none;
    }
}
</style>

