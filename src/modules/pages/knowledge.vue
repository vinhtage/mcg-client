<template>
    <div class="knowledge">
        <div class="align-full">
            <div class="knowledge1">
                <span class="t1">KIẾN THỨC</span>
        
                <div class="t1-desc">
                    <span>Chia sẻ các kiến thức liên quan đến quản trị và công nghệ</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Knowledge',
    components:{
    }
}
</script>

<style lang="scss">
.knowledge {
    width: 100%;
    background-image: url('../../assets/home2.png');
    background-size: cover;
    background-position: bottom;

    .knowledge1 {
        height: 540px;
        color: #FFF;
        padding-top: 272px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}
</style>