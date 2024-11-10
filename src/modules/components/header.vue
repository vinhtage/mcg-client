<template>
    <div class="header" :class="{'bg-white': scrollPosition > 50}">
        <div class="align-full">
            <div class="nav-menu">
                <router-link to="/">
                    <img :src="scrollPosition > 50 ? require('@/assets/ipx-logo2.png') : require('@/assets/ipx-logo1.png')"/>
                </router-link>
                <div class="menu">
                    <router-link class="navbar pointer" :class="{'router-link-active': currentRoutePath === '/about-us'}" to="/about-us">Về chúng tôi</router-link>
                    <router-link class="navbar pointer" :class="{'router-link-active': currentRoutePath === '/solution'}" to="/solution">Giải pháp</router-link>
                    <router-link class="navbar pointer" :class="{'router-link-active': currentRoutePath === '/pricing'}" to="/pricing">Báo giá</router-link>
                    <router-link class="navbar pointer" :class="{'router-link-active': currentRoutePath === '/knowledge'}" to="/knowledge">Kiến thức</router-link>
                    <router-link class="navbar pointer" :class="{'router-link-active': currentRoutePath === '/event'}" to="/event">Sự kiện</router-link>
                </div>
            </div>
            <div class="contact">
                <button><span>LIÊN HỆ NGAY</span></button>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill="#FFF">
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components:{
        
    },
    data(){
        return {
            scrollPosition: null,
        }
    },
    mounted(){
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        }
    },
    computed: {
        currentRoutePath() {
            return this.$route.path;
        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    position: fixed;
    z-index: 100;
    -webkit-transition: all ease-out .5s;
    -moz-transition: all ease-out .5s;
    -o-transition: all ease-out .5s;
    transition: all ease-out .5s;

    .align-full {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;

        .nav-menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 60px;

            .menu {
                display: flex;
                gap: 60px;

                a {
                    text-decoration: none;
                    color: #FFF;
                }

                .router-link-active {
                    color: #999999;
                }
            }
        }

        .contact {
            display: flex;
            align-items: center;
            gap: 35px;
            
            button {
                padding: 7px 33px;
                color: #005A8C;
                border-radius: 6px;
                border: none;
                font-size: 15px;
                line-height: 19.5px;
                font-weight: 500;
            }

            img {
                width: 24px;
                height: 24px;
            }
        }
    }

    &.bg-white{
        background-color: #FFF !important;
        
        a {
            color: #999999 !important;
        }

        svg {
            fill: #005A8C !important;
        }

        button {
            background: #005A8C !important;
            color: #FFF !important;
        }

        .router-link-active {
            color: #005A8C !important;
        }
    }
}
</style>