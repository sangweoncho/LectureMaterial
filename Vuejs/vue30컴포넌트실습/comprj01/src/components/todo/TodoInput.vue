<style scoped>
input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}

input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
</style>

<template>
  <div class="inputBox shadow">
    <input
      type="text"
      placeholder="Type what you have to do"
      v-model="newToItem"
      ref="refNewTodoItem"
    />
    <span class="addContainer" v-on:click="addTodo">
      <i aria-hidden="true" class="addBtn fas fa-plus"></i>
    </span>

    <div
      class="modal-mask"
      v-on:keyup.esc="$emit('close')"
      v-if="showModal"
      v-on:close="showModal = false"
    >
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <!-- <h3 class="header">경고</h3> -->
          </div>

          <div class="modal-footer">
            <span v-on:click="showModal = false">
              창을 닫고, 할 일을 입력하세요.
              <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      newToItem: null,
      showModal: false,
    };
  },
  //template: ``,
  methods: {
    addTodo(e) {
      console.log(e.target);
      debugger;
      // 부모 컴포넌트에게 addTodo 이벤트 발생시킨다.
      this.$emit('addTodo', e, this.$data.newToItem); // 메소드명과 같이addTodo

      // 입력태그에 포커스 : ref 태그
      if (
        !this.$data.newTodoItem ||
        this.$data.newTodoItem.trim().length <= 0
      ) {
        // 모달창 이용, 포커스 이용 : 2가지
        this.$data.showModal = !this.$data.showModal;
        this.$refs.refNewTodoItem.focus();
        return;
        // e.stopPropagation();
        // e.preventDefault();
      }
      // 입력박스 초기화
      this.$data.newTodoItem = null;
    },
    /* 이벤트 핸들러 등록 + 일반 함수 */
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져오는 헬퍼메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
