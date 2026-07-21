<template>
  <footer class="footer">
    <div>
      <div class="footer-main">
        <!-- 左侧品牌 -->
        <div class="footer-brand">
          <div class="footer-logo-wrap">
            <img class="footer-logo-icon" :src="footerLogo" alt="华启天成" />
            <div class="footer-logo-text">
              <span class="footer-brand-name">华启天成</span>

            </div>
          </div>
          <div class="footer-social-icons">
            <a href="#" class="footer-social-icon" title="微博">
              <img :src="weiboIcon" alt="微博" />
            </a>
            <a href="#" class="footer-social-icon" title="抖音">
              <img :src="douyinIcon" alt="抖音" />
            </a>
            <a href="#" class="footer-social-icon" title="微信">
              <img :src="wechatIcon" alt="微信" />
            </a>
          </div>
        </div>

        <!-- 中间链接菜单 -->
        <div class="footer-menu-grid">
          <div class="footer-menu-col">
            <p class="footer-menu-title">产品中心</p>
            <ul class="footer-menu-list">
              <li><a href="#">多旋翼飞行平台</a></li>
              <li><a href="#">固定翼飞行平台</a></li>
              <li><a href="#">系留无人机</a></li>
              <li><a href="#">无人机消防车</a></li>
              <li><a href="#">载荷配件</a></li>
            </ul>
          </div>
          <div class="footer-menu-col">
            <p class="footer-menu-title">解决方案</p>
            <ul class="footer-menu-list">
              <li><a href="#">城市消防</a></li>
              <li><a href="#">森林消防</a></li>
              <li><a href="#">清洗系列</a></li>
              <li><a href="#">挂载系列适配</a></li>
              <li><a href="#">固定翼巡检系列</a></li>
              <li><a href="#">系留系列</a></li>
              <li><a href="#">科研定制服务</a></li>
            </ul>
          </div>
          <div class="footer-menu-col">
            <p class="footer-menu-title">服务支持</p>
            <ul class="footer-menu-list">
              <li><a href="#">售后保障</a></li>
              <li><a href="#">技术支持</a></li>
              <li><a href="#">建议与反馈</a></li>
              <!-- <li><a href="#">售后保障</a></li>
              <li><a href="#">现场演示</a></li> -->
            </ul>
          </div>
          <div class="footer-menu-col">
            <p class="footer-menu-title">关于我们</p>
            <ul class="footer-menu-list">
              <li><a href="#">企业简介</a></li>
              <li><a href="#">资质荣誉</a></li>
              <li><a href="#">新闻动态</a></li>
              <li><a href="#">加入我们</a></li>
            </ul>
          </div>
          <!-- <div class="footer-menu-col">
            <p class="footer-menu-title">服务支持</p>
            <ul class="footer-menu-list">
              <li><a href="#">产品手册</a></li>
              <li><a href="#">技术白皮书</a></li>
              <li><a href="#">操作视频</a></li>
              <li><a href="#">常见问题</a></li>
              <li><a href="#">下载中心</a></li>
            </ul>
          </div> -->
        </div>

        <!-- 右侧二维码 -->
        <div class="footer-qrcode">
          <div class="footer-qrcode-img">
            <img :src="qrcodeIcon" alt="二维码" />
          </div>
          <p class="footer-qrcode-text">扫一扫关注</p>
          <p class="footer-qrcode-text">华启天成公众号</p>
        </div>
      </div>

      <!-- 底部信息栏 -->
      <div class="footer-info-bar">
        <span>服务电话：16680932174（微信同号）</span>
        <span>公司地址:深圳市龙华区观湖街道鹭湖社区观乐路5号多彩科创园B座303</span>
      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <p>Copyright © 2025 华启天成 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 预加载图片路径
const footerLogo = new URL('../../assets/home/图标/logo.png', import.meta.url).href
const weiboIcon = new URL('../../assets/home/图标/t.png', import.meta.url).href
const douyinIcon = new URL('../../assets/home/图标/y.png', import.meta.url).href
const wechatIcon = new URL('../../assets/home/图标/u.png', import.meta.url).href
const qrcodeIcon = new URL('../../assets/home/图标/二维码.png', import.meta.url).href
</script>

<style scoped>
/* 页脚样式 - 按 1920 设计等比缩放（vw），与解决方案等页面缩放方式一致，不单独设置断点 */
.footer {
  background: #272727;
  color: rgba(255, 255, 255, 0.7);
  /* 1920 时 = 53px */
  padding-bottom: 2.76042vw;
}

/* 确保所有子元素使用思源黑体CN字体 */
.footer * {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.footer-main {
  display: grid;
  /* 1920 时 = 378px 1fr 261px */
  grid-template-columns: 19.6875vw 1fr 13.59375vw;
  gap: 0;
  /* 1920 时 = 75px */
  padding-bottom: 3.90625vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  align-items: start;
  /* 1920 时 = 121px 120px 75px 121px */
  padding: 6.30208vw 6.25vw 3.90625vw 6.30208vw;
}

/* 左侧品牌区 */
.footer-brand {
  /* 1920 时 = 378px */
  min-width: 19.6875vw;
  max-width: 19.6875vw;
}

.footer-logo-wrap {
  display: flex;
  align-items: center;
  /* 1920 时 = 23px */
  gap: 1.19792vw;
  /* 1920 时 = 12px */
  margin-bottom: 0.625vw;
}

.footer-logo-icon {
  /* 1920 时 = 50px */
  width: 3.23vw;
  height: 3.49vw;
  object-fit: contain;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
}

.footer-brand-name {
  /* 1920 时 = 29px */
  font-size: 1.51042vw;
  font-weight: 600;
  color: white;
  /* 1920 时 = 10px */
  margin-bottom: 0.52083vw;
  /* 随字号等比（无单位，自动缩放） */
  line-height: 1.3;
}

.footer-brand-sub {
  /* 1920 时 = 15px */
  font-size: 0.78125vw;
  color: rgba(255, 255, 255, 0.5);
  /* 1920 时 = 1px */
  letter-spacing: 0.05208vw;
}

.footer-social-icons {
  display: flex;
  /* 1920 时 = 10px */
  gap: 0.52083vw;
  /* 1920 时 = 85px */
  margin-left: 4.42708vw;
}

.footer-social-icon {
  /* 1920 时 = 40px */
  /* width: 2.08333vw;
  height: 2.08333vw; */
  border-radius: 50%;
  /* background: rgba(255, 255, 255, 0.1); */
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: background 0.3s, color 0.3s;
}

.footer-social-icon:hover {
  background: #00D4ff;
  color: white;
}

.footer-social-icon img {
  /* 1920 时 = 20px */
  width: 1.825vw;
  height: 1.825vw;
  object-fit: contain;
}

/* 中间链接菜单 */
.footer-menu-grid {
  display: grid;
  /* 按内容自适应宽度，不再等分撑满整行 */
  grid-template-columns: repeat(4, auto);
  /* 1920 时列间距 ≈ 29px */
  gap: 1.5vw;
}

.footer-menu-grid .footer-menu-col {
  white-space: nowrap;
}

.footer-menu-title {
  /* 1920 时 = 22px */
  font-size: 1.14583vw;
  font-weight: 600;
  color: white;
  /* 1920 时 = 39px */
  margin-bottom: 2.03125vw;
  white-space: nowrap;
}

.footer-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu-list li {
  /* 1920 时 = 26px */
  margin-bottom: 1.35417vw;
}

.footer-menu-list a {
  /* 1920 时 = 16px（原继承默认字号，统一为 vw 等比） */
  font-size: 1.14583vw;
  color: #929598;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s;
  /* 随字号等比 */
  line-height: 1.6;
}

.footer-menu-list a:hover {
  color: #00D4ff;
}

/* 右侧二维码 */
.footer-qrcode {
  text-align: center;
  /* 1920 时 = 261px */
  min-width: 13.59375vw;
  max-width: 13.59375vw;
}

.footer-qrcode-img {
  display: flex;
  align-items: center;
  justify-content: center;
  /* 1920 时 = 16px */
  margin-bottom: 0.83333vw;
  overflow: hidden;
}

.footer-qrcode-img img {
  /* 1920 时 = 130px */
  width: 7.7604vw;
  height: 7.8646vw;
  object-fit: contain;
}

.footer-qrcode-text {
  /* 1920 时 = 21px */
  font-size: 1.09375vw;
  color: #818587;
  /* 随字号等比 */
  line-height: 1.5;
}

/* 底部信息栏 */
.footer-info-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  /* 1920 时 = 104px */
  gap: 5.41667vw;
  /* 1920 时 = 41px 0 */
  padding: 2.13542vw 0;
  /* 1920 时 = 17px */
  font-size: 0.88542vw;
  font-weight: 600;
  color: #919598;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  /* 随字号等比 */
  line-height: 1.6;
}

/* 版权信息 */
.footer-bottom {
  /* 1920 时 = 53px 0 0 */
  padding: 2.76042vw 0 0;
  text-align: center;
  /* 1920 时 = 17px */
  font-size: 0.88542vw;
  font-weight: 600;
  color: #919598;
  /* 随字号等比 */
  line-height: 1.6;
}
</style>