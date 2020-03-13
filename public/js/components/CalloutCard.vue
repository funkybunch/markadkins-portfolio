<template>
    <aside class="callout-card">
        <h2>{{ content.title }}</h2>
        <fieldset class="filter-button-group">
            <legend class="sr-only">Job Opening Filter</legend>
            <span>
                <input type="radio"
                       name="categoryFilter"
                       v-on:click="loadAllResults"
                       id="category-filter-all"
                       checked/>
                <label for="category-filter-all">all</label>
            </span>
                <span v-if="categories"
                      v-for="category in categories"
                      v-bind:key="category" >
                <input type="radio"
                       name="categoryFilter"
                       v-on:click="filterResults(category)"
                       v-bind:id="'category-filter-' + category">
                <label v-bind:for="'category-filter-' + category">{{ category }}</label>
            </span>
        </fieldset>
        <div class="results-container">
            <div class="results-content">
                <p>{{ results.length }} {{ content.type }}</p>
                <CalloutCardItem
                        v-for="item in results"
                        v-bind:key="item.index"
                        v-bind:content="item"
                        v-bind:cdn="content.cdn"
                        v-bind:action-trigger.sync="actionListener"
                />
            </div>
            <span v-if="categories && results.length > 3"
                  v-on:click="scrollToEnd()"
                  v-bind:class="{ hidden: !showScrollIndicator }"
                  class="scroll-indicator"><i class="fal fa-arrow-down"></i> Scroll for more</span>
        </div>
        <Modal v-bind:modal-visible.sync="modalVisible"
               v-bind:header.sync="modalHeader"
               v-bind:content.sync="modalContent"
               v-bind:action.sync="modalAction"
        />
    </aside>
</template>

<script>
    import CalloutCardItem from './CalloutCardItem.vue'
    import Modal from './Modal.vue'

    export default {
        name: 'CalloutCard',
        props: ['content'],
        components: {
            CalloutCardItem,
            Modal
        },
        mounted() {
            const container = this.$el.querySelector(".results-content");
            container.addEventListener('scroll', this.onScroll);
            this.loadAllResults();
            this.loadCategories();
        },
        data() {
            return {
                categories: [],
                results: [],
                showScrollIndicator: true,
                lastScrollPosition: 0,
                modalVisible: false,
                modalHeader: "",
                modalContent: "",
                modalAction: this.$props.content.modalAction,
                actionListener: { triggered: false, item: null }
            }
        },
        methods: {
            loadAllResults() {
                this.$data.results = JSON.parse(JSON.stringify(this.$props.content.items));
            },
            loadCategories(){
                for(let i = 0; this.$props.content.items.length > i; i++){
                    if(this.categories.indexOf(this.$props.content.items[i].category) === -1) {
                        this.categories.push(this.$props.content.items[i].category);
                    }
                }
            },
            filterResults(category) {
                this.results = [];
                for(let i = 0; this.$props.content.items.length > i; i++){
                    if(!this.$props.content.items[i].category.localeCompare(category)) {
                        this.results.push(this.$props.content.items[i]);
                    }
                }
            },
            scrollToEnd() {
                const container = this.$el.querySelector(".results-content");
                container.scrollTop = container.scrollHeight;
                this.$data.showScrollIndicator = false;
            },
            onScroll () {
                const container = this.$el.querySelector(".results-content");
                const currentScrollPosition = container.scrollTop;
                if (currentScrollPosition < 0) {
                    return
                }
                // Stop executing this function if the difference between
                // current scroll position and last scroll position is less than some offset
                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 90) {
                    return
                }
                this.showScrollIndicator = currentScrollPosition < this.lastScrollPosition;
                this.lastScrollPosition = currentScrollPosition
            },
            showModal(item) {
                this.$data.modalVisible = true;
                this.$data.modalHeader = item.title;
                this.$data.modalContent = item.description;
            }
        },
        watch: {
            actionListener: function(action) {
                if(action.triggered) {
                    this.showModal(action.item);
                    this.$data.actionListener.triggered = false;
                    this.$data.actionListener.item = null;
                }
            }
        },
        beforeDestroy () {
            const container = this.$el.querySelector(".results-content");
            container.removeEventListener('scroll', this.onScroll)
        }
    }
</script>