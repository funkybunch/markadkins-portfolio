<template>
    <aside class="callout-card">
        <h2>{{ content.title }}</h2>
        <div class="filter-button-group">
            <span>
                <input type="radio"
                       name="categoryFilter"
                       v-on:click="loadAllResults"
                       id="category-filter-all"
                       checked/>
                <label for="category-filter-all">all</label>
            </span>
                <span v-for="category in categories"
                      :key="category" >
                <input type="radio"
                       name="categoryFilter"
                       v-on:click="filterResults(category)"
                       v-bind:id="'category-filter-' + category">
                <label v-bind:for="'category-filter-' + category">{{ category }}</label>
            </span>
        </div>
        <div class="results-container">
            <div class="results-content">
                <p>{{ results.length }} {{ content.type }}</p>
                <CalloutCardItem
                        v-for="item in results"
                        v-bind:key="item.index"
                        v-bind:content="item"
                />
            </div>
        </div>
    </aside>
</template>

<script>
    import CalloutCardItem from './CalloutCardItem.vue'

    export default {
        name: 'CalloutCard',
        props: ['content'],
        components: {
            CalloutCardItem
        },
        mounted() {
            this.loadAllResults();
            this.loadCategories();
        },
        data() {
            return {
                categories: [],
                results: []
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
            }
        }
    }
</script>