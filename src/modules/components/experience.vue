<template>
    <div class="experience" :class="{'light': isLight}">
        <div class="align-full">
            <div class="box-ex" :class="{'dark': !isLight}" :style="{'height': !isLight ? '520px' : '410px'}">
                <div class="title-light" v-if="isLight">
                    <div class="ex flex-center column">
                        <span class="t-note">KINH NGHIỆM PHÁT TRIỂN PHẦN MỀM</span>
                        <span class="t2">Hơn một thập kỷ của sự Phát triển và Đổi mới </span>
                    </div>
                </div>
                <div class="title" v-if="!isLight">
                    <div class="ex column">
                        <span class="t-note">KINH NGHIỆM VƯỢT TRỘI</span>
                        <span class="t2">Hơn một thập kỷ của sự Phát triển và Đổi mới </span>
                    </div>
                    <div class="ex-desc" v-if="!isLight">
                        <span class="ex-desc-text">
                            iPeopleX tự hào với bề dày kinh nghiệm trong việc phát triển các giải pháp quản lý nhân sự đột phá. Chúng tôi không ngừng cải tiến để đảm bảo nền tảng của chúng tôi luôn đáp ứng nhu cầu phong phú của doanh nghiệp, mang lại những giá trị vượt trội cho khách hàng, với trọng tâm là sự đổi mới và trải nghiệm người dùng tối ưu.
                        </span>
                    </div>
                </div>
                <div class="data">
                    <div class="item">
                        <div class="num">
                            <span ref="counter1">{{ counter1 }}</span> +
                        </div>
                        <span class="t-desc">Năm kinh nghiệm phát triển giải pháp phần mềm</span>
                    </div>
                    <div class="item">
                        <div class="num">
                            <span ref="counter2">{{ counter2 }}</span> +
                        </div>
                        <span class="t-desc">Doanh nghiệp đã cung cấp giải pháp phần mềm</span>
                    </div>
                    <div class="item">
                        <div class="num">
                            <span ref="counter3">{{ counter3 }}</span> +
                        </div>
                        <span class="t-desc">Doanh nghiệp đã sử dụng giải pháp phần mềm</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    props: {
        isLight: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            counter1: 0,
            counter2: 0,
            counter3: 0,
            observer: null
        }
    },
    mounted() {
        this.setupIntersectionObserver()
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect()
        }
    },
    methods: {
        setupIntersectionObserver() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateNumbers()
                        this.observer.disconnect()
                    }
                })
            })
            
            this.observer.observe(this.$refs.counter1)
        },
        animateNumbers() {
            this.animateValue(1, 10, 2000, 'counter1')
            this.animateValue(1, 100, 2000, 'counter2')
            this.animateValue(1, 50, 2000, 'counter3')
        },
        animateValue(start, end, duration, property) {
            const range = end - start
            const startTime = new Date().getTime()
            const endTime = startTime + duration
            
            const run = () => {
                const now = new Date().getTime()
                const remaining = Math.max((endTime - now) / duration, 0)
                const value = Math.round(end - (remaining * range))
                this[property] = value
                if (value < end) {
                    requestAnimationFrame(run)
                }
            }
            
            requestAnimationFrame(run)
        }
    }
}
</script>

<style lang="scss">
.experience {
    padding: 50px 0;

    &.light {
        background-image: url('../../assets/ex-light-bg.png');
        background-size: cover;
        background-position: center;
        height: 410px;

        .title-light {
            .ex {
                .t-note {
                    color: rgba(0, 184, 230, 1);
                }
    
                .t2 {
                    color: #000;
                }
            }
        }


        .data {
            color: rgba(0, 90, 140, 1);

            .item {
                border-left: 3px solid rgba(0, 90, 140, 1) !important;
            }
        }
    }

    .box-ex {
        position: relative;
        width: 100%;
        color: #FFF;

        &.dark {
            background-image: url('../../assets/back3.png');
            background-size: cover;

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(31, 54, 79, 0.51);
            }
        }


        .title {
            position: relative;
            padding: 60px 50px 40px 50px;
            display: flex;
            justify-content: space-between;

            .ex {
                gap: 15px;
                width: 550px;

                .t-note {
                    color: rgba(154, 235, 255, 1);
                }
            }

            .ex-desc {
                font-size: 15px;
                line-height: 28px;
                font-weight: 300;
                text-align: justify;
                width: 500px;
            }
        }

        .data {
            position: relative;
            padding: 50px;
            display: flex;
            justify-content: space-between;

            .item {
                width: 263px;
                display: flex;
                flex-direction: column;
                gap: 26px;
                border-left: 3px solid rgba(255, 255, 255, 1);
                padding-left: 30px;

                .num {
                    font-size: 80px;
                    line-height: 60px;
                    font-weight: 800;
                }
            }
        }
    }
}
</style>
