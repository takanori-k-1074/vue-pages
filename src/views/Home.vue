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
            このページはvue/cli 4.1.1で作成,レスポンシブ対応とmetaタグでSEOを意識している<br />
            フロントエンドとバックエンドは別プロジェクトが多いらしいという情報からvueのみでやってみることにした<br /><br />
            favoriteページではsteamAPIで最近興味のあるゲームのニュースを叩いてます
          </p>
        </div>
      </div>
    </section>

    <section class="timeline section">
      <div class="container clear">
        <h2 class="section-title">ヒストリー</h2>
        <ul class="timeline">
          <li>
            <p class="timeline-date">2019年10月</p>
            <div class="timeline-content">
              <p>
                自衛官在職中同僚からの影響でプログラミングに興味をもちエンジニアを目指すことに決める
              </p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年3月</p>
            <div class="timeline-content">
              <p>
                <span class="Niwaai-content">自衛官退職</span>
              </p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年4月</p>
            <div class="timeline-content">
              <p>
                プログラミングの勉強（Progate、Railsチュートリアル）、
                ポートフォリオ作成のための知見を情報収集
              </p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年6月</p>
            <div class="timeline-content">
              <p>
                プログラミングスクールに入学（2ヶ月半）
              </p>
              <p>
                HTML・CSS・Rubyの基礎文法、CLI操作、Linuxコマンド、Git・Githubの使い方、
                DB設計、Railsを使った簡単なチャットアプリケーションの作成
              </p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年7月</p>
            <div class="timeline-content">
              <p>
                自由作成課題でlinebotを作成<br />
                チーム開発でフリマアプリの制作
              </p>
              <p></p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年8月</p>
            <div class="timeline-content">
              <p>プログラミングスクールを卒業</p>
              <p>ポートフォリオの制作に取り掛かる</p>
              <p>Docker・AWS・CircleCI・vuejsについて学習する</p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年9月</p>
            <div class="timeline-content">
              <p>ポートフォリオが完成</p>
              <p>steamnews翻訳アプリ、ポートフォリオページ</p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年10月</p>
            <div class="timeline-content">
              <p>就職活動開始</p>
              <p>就職活動の中で不足している知見を情報収集</p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2020年12月（現在）</p>
            <div class="timeline-content">
              <p>就職活動継続しながら追加ポートフォリオ作成中</p>
            </div>
          </li>
        </ul>
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
            <a href="https://mysteamnews1074.com/"><img src="../assets/steamnews.png" /> </a>
            <p>Rails / AWS / Docker / steamAPI / Azuretranslator</p>
          </div>
          <div class="course-item">
            <img src="../assets/koizumibot1.png" />
            <p>Ruby / LineDevelopers / openweathermap API</p>
          </div>
        </div>
        <h3 class="section-title">
          <a href="https://github.com/takanori-k-1074" class="link">githubのリンク</a>
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
