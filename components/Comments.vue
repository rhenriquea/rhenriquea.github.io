<template>
  <section v-if="post">
    <h2>Comments</h2>
    <hr />

    <form @submit.prevent="sendComment">
      <div class="input-group">
        <input class="form-control" type="text" autocomplete="off" id="name" aria-label="Nome" />
        <label for="name"> Nome </label>
      </div>
      <div class="input-group">
        <textarea name="comment" id="comment" class="form-control" cols="30" rows="5"></textarea>
        <label for="comment"> Comentario </label>
      </div>
      <div class="actions">
        <button>
          <font-awesome-icon icon="paper-plane" />
          Enviar
        </button>
      </div>
    </form>

    <ul class="comments__list mt-3x">
      <li v-for="comment in post.comments" class="comment p my">
        <div
          v-if="comment.member"
          :style="{ backgroundImage: `url(${comment.member.avatar.url})` }"
          class="comment__image"
        ></div>
        <div
          v-else
          class="comment__image"
          :style="{
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png)`,
          }"
        ></div>
        <div class="comment__content ml">
          <h4>{{ comment.titulo }}</h4>
          <p class="comment__author" v-if="comment.member">{{ comment.member.nome }}</p>
          <p class="comment__author" v-else>{{ comment.name }}</p>
          <time>{{ formatDate(comment.createdAt) }}</time>
          <p>{{ comment.comment_review }}</p>
          <div class="mt comment__interaction">
            <button class="like" @click="vote($event, comment.id, 'like')">
              <font-awesome-icon icon="thumbs-up" /> <span>{{ comment.likes }}</span>
            </button>
            <button class="dislike" @click="vote($event, comment.id, 'dislike')">
              <font-awesome-icon icon="thumbs-down" /> <span> {{ comment.dislikes }}</span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { formatDate } from '../utils';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatDate,
    sendComment() {
      console.log('Send comment');
    },
    vote($event, commentId, type) {
      const voteKey = `voted_${commentId}`;
      const sessionVote = sessionStorage.getItem(voteKey);
      const interactionBtn = $event.path.find(el => el.nodeName === 'BUTTON');

      if (!sessionVote) {
        sessionStorage.setItem(voteKey, type);
        interactionBtn.classList.add('voted');
      }

      // Remove key if user wants to disvote
      if (sessionVote && sessionVote === type) {
        sessionStorage.removeItem(voteKey);
        interactionBtn.classList.remove('voted');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;

  textarea {
    resize: none;
  }

  .input-group {
    margin: $spacing-s 0;
    position: relative;
  }

  // Initial label state
  label {
    color: $dark-gray;
    font-size: 14px;
    left: $spacing-xs;
    position: absolute;
    top: 8px;
    z-index: 0;
  }

  .form-control {
    background: transparent;
    border: 1px solid $dark-gray;
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    font-size: 16px;
    padding: $spacing-xs;
    position: relative;
    width: 100%;
    z-index: 1;

    // Add transition to label and input
    &,
    & + label {
      transition: all 0.3s;
    }

    &:focus {
      border-color: $blue;
      border-width: 2px;
      outline: none;
    }

    // Float label to the top and change its color
    &:focus + label,
    &.not-empty + label {
      color: $blue;
      font-size: 12px;
      left: 0;
      top: -18px;
    }
    &.not-empty:not(:focus) + label {
      color: $dark-gray;
    }
  }

  div {
    &.actions {
      text-align: right;

      button {
        background-color: $blue;
        border: 0;
        border-radius: 5px;
        color: $white;
        cursor: pointer;
        font-size: 14px;
        margin-top: $spacing-s;
        padding: $spacing-s $spacing-m;
      }
    }
  }
}

.comments {
  &__list {
    list-style: none;

    li {
      border: 1px solid $gray;
      border-radius: 5px;
      display: flex;
    }
  }
}

.comment {
  &__content {
    line-height: 1em;

    h4 {
      margin-bottom: $spacing-xs;
    }

    time {
      font-size: 12px;
    }
  }

  &__author {
    font-size: 12px;
    margin: 0;
  }

  &__interaction {
    button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      opacity: 0.7;
      outline: none;
      padding-bottom: $spacing-xs;

      span {
        font-size: 12px;
      }

      &.like {
        color: $blue;
      }

      &.dislike {
        color: $red;
      }

      &:hover {
        opacity: 1;
      }

      &.voted {
        border-bottom: 1px solid;
        opacity: 1;
      }
    }
  }

  &__image {
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
}
</style>
