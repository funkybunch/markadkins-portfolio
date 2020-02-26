<template>
    <div v-if="modalVisible" class="modal">
        <div class="modal-background" v-on:click="closeModal"></div>
        <div class="modal-container">
            <div class="modal-body">
                <div class="modal-header">
                    <h1 v-html="header"></h1>
                    <span class="close" v-on:click="closeModal" role="button"><i class="fal fa-times"></i></span>
                    <div class="modal-content" v-html="content"></div>
                    <div class="modal-actions">
                        <button v-if="action" class="primary" v-on:click="action.callback">{{ action.label }}</button>
                        <button class="secondary" v-on:click="closeModal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Nav',
        props: ['modalVisible', 'header', 'content', 'action'],
        methods: {
            openModal() {
                this.$emit('update:modalVisible', true);
            },
            closeModal() {
                this.$emit('update:modalVisible', false);
            }
        },
        watch: {
            modalVisible: function(open) {
                if(open) {
                    this.openModal();
                } else {
                    this.closeModal();
                }
            }
        }
    }
</script>