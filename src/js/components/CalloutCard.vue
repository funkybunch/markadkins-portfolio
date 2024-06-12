<template>
    <aside class="callout-card" v-bind:class="['items-' + results.length, { filterable : hasCategories }, { 'filter-row-3' : (categories.length > 4) }]">
        <h2>{{ content.title }}</h2>
        <h3 v-if="content.subtitle" class="h4">{{ content.subtitle }}</h3>
        <fieldset v-if="hasCategories" class="filter-button-group">
            <legend class="sr-only">Job Opening Filter</legend>
            <span>
                <input type="radio"
                       name="categoryFilter"
                       v-on:click="loadAllResults"
                       tabindex="0"
                       role="radio"
                       id="category-filter-all"
                       checked/>
                <label for="category-filter-all">all</label>
            </span>
            <span v-for="category in categories"
                  v-bind:key="category" >
                <input type="radio"
                       name="categoryFilter"
                       v-on:click="filterResults(category)"
                       tabindex="0"
                       role="radio"
                       v-bind:id="'category-filter-' + category">
                <label v-bind:for="'category-filter-' + category">{{ category }}</label>
            </span>
        </fieldset>
        <div class="results-container">
            <div :class="(hasCategories)?'categories results-content':'no-categories results-content'">
                <p v-if="hasCategories">{{ results.length }} {{ content.type }}</p>
                <CalloutCardItem
                        v-for="item in results"
                        v-bind:key="item.index"
                        v-bind:content="item"
                        v-bind:cdn="content.cdn"
                        v-bind:action-trigger="actionListener"
                        @action-triggered="action"
                />
            </div>
            <span v-if="hasCategories && results.length > 3"
                  v-on:click="scrollToEnd()"
                  v-bind:class="{ hidden: !showScrollIndicator }"
                  class="scroll-indicator"><i class="fal fa-arrow-down"></i> Scroll for more</span>
        </div>
        <Modal v-if="hasCategories"
               v-bind:modal-visible="modalVisible"
               v-bind:header="modalHeader"
               v-bind:content="modalContent"
               v-bind:action="modalAction"
               v-bind:action-data="modalActionData"
               @close-modal="hideModal"
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
                hasCategories: false,
                results: [],
                showScrollIndicator: true,
                lastScrollPosition: 0,
                modalVisible: false,
                modalHeader: "",
                modalContent: "",
                modalAction: this.$props.content.modalAction,
                modalActionData: "",
                actionListener: { triggered: false, item: null }
            }
        },
        methods: {
            loadAllResults() {
              console.log(this.$props.content)
                this.$data.results = JSON.parse(JSON.stringify(this.$props.content.items));
            },
            loadCategories(){
                for(let i = 0; this.$props.content.items.length > i; i++){
                    if(this.$props.content.items[i].category !== undefined){
                        if(this.categories.indexOf(this.$props.content.items[i].category) === -1) {
                            this.categories.push(this.$props.content.items[i].category);
                        }
                    }
                }
                if(this.categories.length > 0) {
                    this.hasCategories = true;
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
                this.lastScrollPosition = currentScrollPosition;
            },
            showModal(item) {
                this.modalVisible = true;
                this.modalHeader = item.title;
                this.modalContent = item.description;
                this.modalActionData = item.link;
            },
            hideModal() {
                this.modalVisible = false;
            },
            action(args) {
              if(args.triggered) {
                this.showModal(args.item);
                this.actionListener.triggered = false;
                this.actionListener.item = null;
              }
            }
        },
        beforeDestroy () {
            const container = this.$el.querySelector(".results-content");
            container.removeEventListener('scroll', this.onScroll)
        }
    }
</script>