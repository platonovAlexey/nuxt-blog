<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
        <i class="el-icon-back"></i></nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{new Date().toLocaleString()}}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img 
          src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg" 
          alt="Post image"
        >
      </div>
    </header>
    <main class="postcontent">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, assumenda?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, assumenda?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, assumenda?</p>
    </main>
    <footer></footer>
  </article>
</template>

<script>
export default {
  validate({params}) {
    return Boolean(params.id)
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
  &-header{
    margin-bottom: 1.5rem;
  }
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  &-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }
  &-image{
    img {
      width: 100%;
      height: auto;
    }
  }
  &-content{
    margin-bottom: 2rem;
  }

}
</style>