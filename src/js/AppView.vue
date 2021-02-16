<template>
  <div>
    <div class="banner" v-if="timeToVote">
      <div class="main-container">
        <div class="row">
          <div class="col w-12">
            <img v-bind:src="this.$root.$data.cdn + '/images/icons/icon-vote-color.svg'" alt="Register to Vote Icon" height="40" width="40" />
            <p>Have you registered to vote?  Register now and make an impact in the U.S. 2020 Election.  <a href="https://www.vote.org/register-to-vote/" target="_blank">Register to vote now!</a></p>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'AppView',
    data() {
      return {
        timeToVote: false
      }
    },
    watch: {
      $route(to, from) {
        document.title = to.meta.title || 'Your Website'
      }
    }
  }
</script>