<template>
    <div ref="modal" v-show="show" class="modal" role="alert">
        <div class="modal-content">
            <slot name="header" />
            <slot name="body" />
            <slot name="footer" />
        </div>
    </div>
</template>

<script>

export default {
    props: {
        show: {
            default: false,
            type: Boolean
        }
    },
    emits: ['close'],
    data() {
        return {
            clickListener: (e) => {
                if(e.target === this.$refs.modal) {
                    this.$emit('close');
                }
            },
            pulseEscape: (e) => {
                if(e.key === "Escape") {
                    this.$emit('close');
                }
            }
        }
    },
    mounted() {
        window.addEventListener('click', this.clickListener);
        window.addEventListener('keydown', this.pulseEscape);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.clickListener);
        window.removeEventListener('keydown', this.pulseEscape);
    }
}
</script>

<style scoped>

.modal {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-top: 100px;
    background-color: rgba(0,0,0,0.4);
    display: block;
}

.modal-content {
    position: relative;
    background-color: var(--bg-color);
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>