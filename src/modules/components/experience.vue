<template>
    <div class="experience">
        <div class="align-full">
            <div class="box-ex">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    components:{
        
    }
}
</script>

<style lang="scss">
    .box-ex {
        position: relative;
        background-image: url('../../assets/back3.png');
        background-size: cover;
        width: 100%;
        height: 520px;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(31, 54, 79, 0.51);
        }
    }
</style>
