<template>
    <div class="logo-bar">
        <div class="align-full">
            <div class="box column">
                <div class="title column" v-if="isShowNum">
                    <span class="num">10.000+</span>
                    <span class="title-text">NGƯỜI ĐÃ TRẢI NGHIỆM PHẦN MỀM CỦA CHÚNG TÔI</span>
                </div>
                <div class="bar flex-center mt-20">
                    <div class="scroll">
                        <div class="item-group">
                            <div class="item flex-center" v-for="(item, index) in logoBar" :key="'first-'+index">
                                <img :src="item.imgUrl" alt="logo">
                            </div>
                        </div>
                        <div class="item-group" aria-hidden="true">
                            <div class="item flex-center" v-for="(item, index) in logoBar" :key="'second-'+index">
                                <img :src="item.imgUrl" alt="logo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogoBar',
    props: {
        isShowNum: {
            type: Boolean,
            default: true
        }
    },
    components:{
        
    }
}
</script>

<script setup>
import { ref } from 'vue';

const logoBar = ref([
    // {
    //     title: '',
    //     imgUrl: require('@/assets/logo/logo1.png')
    // },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo2.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo3.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo4.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo5.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo6.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo7.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo8.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo9.png')
    },
    {
        title: '',
        imgUrl: require('@/assets/logo/logo10.png')
    },
]);
</script>

<style lang="scss">
    .logo-bar {
        padding: 20px 0;

        .title {
            align-items: center;

            .num {
                font-size: 30px;
                font-weight: 800;
                color: rgba(0, 70, 168, 1);
                line-height: 27.9px;
            }

            .title-text {
                font-size: 15px;
                font-weight: 600;
                line-height: 40px;
            }
        }

        .bar {
            width: 100%;
            height: 100px;
            overflow: hidden;
            position: relative;

            .scroll {
                display: flex;
                gap: 50px;
                // animation: scroll 5s linear infinite;
                
                &:hover {
                    animation-play-state: paused;
                }
            }

            .item-group {
                display: flex;
                gap: 50px;
                flex-shrink: 0;
            }

            .item {
                img {
                    height: 60px;
                    object-fit: contain;
                }
            }
        }
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
