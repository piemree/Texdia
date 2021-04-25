<script>
import Post from "../../components/Post";
import Spinner from "vue-simple-spinner";

export default {
  data() {
    return {
      selectedFile:null,
      options: {
        year: "numeric",
        day: "numeric",
        month: "long",
      },
      spinner: true,
    };
  },
  methods: {
    posts() {
      this.$store.dispatch("getCurrenUserPosts");
    },
    async follow() {
      await this.$store.dispatch("followUser", this.userProfile.user._id);
    },
    async unfollow() {
      await this.$store.dispatch("unfollowUser", this.userProfile.user._id);
    },
    onChange(e){
   this.onUpload(e.srcElement.files[0])
    },
    onUpload(file){
      const fd=new FormData();
      fd.append("image",file,file.name)
      console.log(fd);
    }
   
  },
  components: {
    Post,
    Spinner,
  },
  async created() {
    await this.$store.dispatch("getUserAndPosts", this.$route.params.id);
    this.spinner = false;
  },
  computed: {
    userProfile() {
      return this.$store.getters.getUserProfile;
    },
    isFollow() {
      return this.$store.getters.getIsFollow;
    },
  },
  watch: {
    async $route() {
      this.spinner = true;
      await this.$store.dispatch("getUserAndPosts", this.$route.params.id);
      this.spinner = false;
    },
  },
};
</script>
<template >
  <div class="profile">
    <Spinner v-if="spinner" size="50" style="padding: 10rem"></Spinner>
    <div v-else class="profile-header">
      <div class="profile-picture">
        <img :src="userProfile.user.picture" alt="profile-pic" />
      </div>
      <div class="profile-info">
        <div v-if="userProfile.isMe" class="setting-button">
          
          <button @click="$refs.fileInput.click()"> Update Profile</button>
          <input @change="onChange" type="file" id="selectedFile" style="display: none;" :ref="'fileInput'" />
        </div>
        <div v-else class="setting-button">
          <button v-if="!isFollow" @click="follow">Follow</button>
          <button v-else @click="unfollow">Unfollow</button>
        </div>

        <div class="name-username">
          <div class="name">{{ userProfile.user.login }}</div>
        </div>
        <div class="created-at">
          <p>
            {{
              new Date(userProfile.user.createdAt).toLocaleString(
                "en-US",
                options
              )
            }}
          </p>
        </div>
        <div class="follow">
          <div class="my-follow">
            <b class="count">{{ userProfile.user.following.length }}</b> takip
            edilen
          </div>
          <div class="followers">
            <b class="count">{{ userProfile.user.followers.length }}</b> Takipçi
          </div>
        </div>
      </div>
    </div>

    <div class="all-posts">
      <Spinner v-if="spinner" size="30"></Spinner>
      <Post
        v-else
        class="post"
        v-for="post in userProfile.posts"
        :key="post._id"
        :post="post"
      />
    </div>
  </div>
</template>

<style scoped>
.created-at {
  font-size: 1rem;
}
.count {
  font-weight: 900;
}
.followers {
  margin-left: 1rem;
}
.follow {
  display: flex;
  justify-content: flex-start;
}
.name-username .username {
  color: var(--grey5);
}
.name-username .name {
  font-weight: 900;
  font-size: 1.5rem;
}
.name-username {
  width: 100%;
}

.setting-button button {
  float: right;
  width: 9rem;
  height: 2.5rem;
  border: none;
  background-color: rgb(29, 161, 242);
  color: #FFF;
  border-radius: 1.2rem;
  cursor: pointer;
}
.setting-button {
  width: 100%;
  position: relative;
}
.profile-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.profile-picture img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid var(--grey6);
  border-radius: 0.5rem;
  cursor: pointer;
}
.profile-picture {
  width: 100%;
  min-height: 15rem;
  max-height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-header {
  width: 100%;
  max-height: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
</style>