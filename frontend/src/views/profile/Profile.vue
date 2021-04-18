<script>
import Post from "../../components/Post";
export default {
  data() {
    return {
      options: {
        year: "numeric",
        day: "numeric",
        month: "long",
      },
      user: {
        displayName: "Emre",
        userName: "pjjemo",
        profileUrl:
          "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        createdAt: "",
        followers: "120",
        following: "3",
      },
    };
  },
  methods: {
    posts() {
      this.$store.dispatch("getCurrenUserPosts");
    },
  },
  components: {
    Post,
  },
  async created() {
    await this.$store.dispatch("getUserAndPosts", this.$route.params.id);
  },
  computed: {
    userProfile() {
      return this.$store.getters.getUserProfile;
    },
  },
};
</script>
<template >
  <div class="profile">
    <div class="profile-header">
      <div class="profile-picture">
        <img :src="user.profileUrl" alt="profile-pic" />
      </div>
      <div class="profile-info">
        <div class="setting-button">
          <button @click="posts">Setting</button>
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
      <Post class="post" v-for="(post, i) in userProfile.posts" :key="i" :post="post" />
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
  width: 8rem;
  height: 2.5rem;
  border: 0.2rem solid var(--grey6);
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
  border: 0.2rem solid var(--grey6);
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