<template>
    <div v-if="modalVisible" class="modal">
        <div class="modal-background" v-on:click="closeModal"></div>
        <div class="modal-container">
            <div class="modal-body">
                <div class="modal-header">
                    <h1 v-html="header"></h1>
                    <button class="close"
                          ref="modalCloseBtn"
                          v-on:click="closeModal"
                          v-on:enter="closeModal"
                          v-on:space="closeModal"
                          role="button"
                          aria-label="Close"
                          tabindex="0">
                      <i class="fal fa-times"></i>
                    </button>
                    <div class="modal-content" v-html="content"></div>
                    <div class="modal-actions">
                        <button v-if="action" class="primary" v-on:click="action.callback(actionData)">{{ action.label }}</button>
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
        props: ['modalVisible', 'header', 'content', 'action', 'actionData'],
        methods: {
            openModal() {
                this.$emit('update:modalVisible', true);
                this.$nextTick(() => this.$refs.modalCloseBtn.focus());
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