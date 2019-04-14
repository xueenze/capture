<template>
    <div class = "user-list-wrapper container-fluid">
        <client-header 
            :isShowHome = "false"
            :isShowIntroduction = "false"
            :isShowCharacter = "false"
            :isShowVideolist = "false"
            :isShowUserlist = "true"></client-header>
        <div class = "user-list container-fluid">
            <div class="row" 
                v-for = "(rowItem, rowIndex) in userListShow" :key = "rowIndex">
                <div class="col-md-3 user-item" 
                v-for = "(columnItem, columnIndex) in rowItem" :key = "columnIndex" @click = "clickItem(rowIndex, columnIndex)">
                    <div class = "content rel">
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
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">截图内容</h4>
                    </div>
                    <div class="modal-body">
                        <img :src="currentUser.capturesrc" alt style="width: 100%;">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
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
        back() {
        }
    }
}
</script>

<style lang="less" scoped>
    .user-list-wrapper{
        background-color: #000000;

        .user-list{
            margin-top: 60px;

            .user-item{
                padding: 10px;

                .content{
                    border: 1px solid #e6e6e6;
                    border-radius: 2px;
                    height: 200px;
                    overflow: hidden;

                    .user-capture{
                        width: 100%;
                    }
                }

                .user-name{
                    text-align: center;
                    margin: 5px auto;
                    color: #a6a6a6;
                }

                &:hover{
                    background-color: rgba(230, 230, 230, 0.1);
                }
            }
        }

        .user-detail{
            margin-top: 60px;
            img{
                width: 100%;
            }
        }
    }
</style>
