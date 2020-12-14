<template>
  <div>
    <section class="profile section">
      <div class="container clear">
        <h2 class="section-title">プロフィール</h2>
        <div class="profile-left">
          <img src="../assets/image0.png" />
        </div>
        <div class="profile-right">
          <p>
            小泉高規(コイズミタカノリ)<br />
            自衛官退職後webエンジニアになるため本格的に学習開始<br />
            ポートフォリオを作成しつつ就職活動しながら継続して不足していると考えられる技術について学習中<br /><br />
            このページはvue/cli
            4.1.1で作成,レスポンシブ対応とmetaタグでSEOを意識している<br />
            フロントエンドとバックエンドは別プロジェクトが多いらしいという情報からvueのみでやってみることにした<br /><br />
            favoriteページではsteamAPIで最近興味のあるゲームのニュースを叩いてます
          </p>
        </div>
      </div>
    </section>

    <section class="course section">
      <div class="container">
        <h2 class="section-title">ポートフォリオ一覧</h2>
        <div class="course-wrapper">
          <div class="course-item">
            <a href="https://aqueous-beyond-99235.herokuapp.com/"
              ><img src="../assets/portforio.png"
            /></a>

            <p>Rails / Vue</p>
          </div>
          <div class="course-item">
            <a href="https://mysteamnews1074.com/"
              ><img src="../assets/steamnews.png" />
            </a>
            <p>Rails / AWS / Docker / steamAPI / Azuretranslator</p>
          </div>
          <div class="course-item">
            <img src="../assets/koizumibot1.png" />
            <p>Ruby / LineDevelopers / openweathermap API</p>
          </div>
        </div>
        <h3 class="section-title">
          <a href="https://github.com/takanori-k-1074" class="link"
            >githubのリンク</a
          >
        </h3>
      </div>
    </section>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld
//   }
// };
</script>
