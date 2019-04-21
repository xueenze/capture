<template>
    <div class = "user-list-wrapper container-fluid" style = "width: 1950px;">
        <client-header 
            :isShowHome = "false"
            :isShowIntroduction = "false"
            :isShowStory = "false"
            :isShowRules = "false"
            :isShowPlay = "true"></client-header>
        <div class = "user-list container-fluid">
            <div class="row" 
                v-for = "(rowItem, rowIndex) in userListShow" :key = "rowIndex">
                <div class="col-md-3 user-item" 
                v-for = "(columnItem, columnIndex) in rowItem" :key = "columnIndex" @click = "clickItem(rowIndex, columnIndex)">
                    <div class = "content">
                        <img class = "user-capture" 
                        :src = "columnItem.capturesrc" alt="">
                    </div>
                    <p class = "user-name">{{columnItem.username}}</p>
                </div>
            </div>
        </div>
        <!-- 截图确认层 -->
        <div id="commentWrapper" class="modal fade">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body rel">
                        <p class = "abs close-modal" @click = "closeModal">CLOSE</p>
                        <img :src="currentUser.capturesrc" alt>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import header from '@/components/header';

import { httpConfig } from '@/utils/config';

import moment from 'moment';

export default {
    components: {
        'client-header': header
    },
    data() {
        return {
            userList: [],
            currentIndex: 0
        }
    },
    computed: {
        userListShow() {
            let list = [];

            let rows =  Math.ceil(this.userList.length / 4);
            let size = this.userList.length;

            for (let row = 0;row < rows;row++) {
                list.push([]);
                for (let i = row * 4;i < (row + 1) * 4 && i < size;i++) {
                let column = i % 4;
                list[row][column] = this.userList[i];
                }
            }

            return list;
        },
        currentUser() {
            return this.userList[this.currentIndex] || '';
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            let res = await this.$apiAxios.get('/comment');
            if (res.data.userlist) {
                this.userList = [];

                res.data.userlist.forEach(comment => {
                    this.userList.push({
                        id: comment.ID,
                        username: `upload at ${moment(parseInt(comment.username)).format('YYYY-MM-DD HH:mm:ss')}`,
                        capturesrc: `${httpConfig.API_HOST}${comment.capturesrc}`
                    });
                });
            }
        },
        clickItem(rowIndex, columnIndex) {
            this.currentIndex = rowIndex * 4 + columnIndex;
            $('#commentWrapper').modal('show');
        },
        closeModal() {
            $('#commentWrapper').modal('hide');
        },
        back() {
        }
    }
}
</script>

<style lang="less" scoped>
    .user-list-wrapper{
        background-color: #000000;

        .user-list{
            margin-top: 140px;

            .user-item{
                margin: 15px;
                width: 443px;
                height: 250px;
                padding: 0;

                .content{
                    height: 200px;
                    overflow: hidden;

                    .user-capture{
                        width: 100%;
                    }
                }

                .user-name{
                    text-align: center;
                    margin: 10px auto;
                    color: #C8C8C8;
                    font-size: 18px;
                }
            }
        }

        .modal{
            background-color: rgba(0, 0, 0, 0.8);
            top: 100px;
            .modal-dialog{
                width: 960px;
                margin-top: 100px;

                .modal-content{
                    background-color: #000000;
                    box-shadow: 0 1px 50px #ffffff;

                    .close-modal{
                        color: rgba(198, 198, 198, 0.5);
                        top: 25px;
                        right: 40px;
                        font-size: 18px;
                        font-weight: bold;
                        cursor: pointer;
                    }

                    img{
                        width: 100%;
                        margin-top: 50px;
                        border-top: 2px rgba(112, 112, 112, 0.5) solid;
                    }
                }
            }
        }
    }
</style>
