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
            <h4 class="footer-menu-title">产品中心</h4>
            <ul class="footer-menu-list">
              <li><a href="#">多旋翼飞行平台</a></li>
              <li><a href="#">固定翼飞行平台</a></li>
              <li><a href="#">系留无人机</a></li>
              <li><a href="#">无人机消防车</a></li>
              <li><a href="#">载荷配件</a></li>
            </ul>
          </div>
          <div class="footer-menu-col">
            <h4 class="footer-menu-title">解决方案</h4>
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
            <h4 class="footer-menu-title">服务支持</h4>
            <ul class="footer-menu-list">
              <li><a href="#">售后保障</a></li>
              <li><a href="#">技术支持</a></li>
              <li><a href="#">建议与反馈</a></li>
              <!-- <li><a href="#">售后保障</a></li>
              <li><a href="#">现场演示</a></li> -->
            </ul>
          </div>
          <div class="footer-menu-col">
            <h4 class="footer-menu-title">关于我们</h4>
            <ul class="footer-menu-list">
              <li><a href="#">企业简介</a></li>
              <li><a href="#">资质荣誉</a></li>
              <li><a href="#">新闻动态</a></li>
              <li><a href="#">加入我们</a></li>
            </ul>
          </div>
          <!-- <div class="footer-menu-col">
            <h4 class="footer-menu-title">服务支持</h4>
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
/* 页脚样式 */
.footer {
  background: #272727;
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 53px;
}

/* 确保所有子元素使用思源黑体CN字体 */
.footer * {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.footer-main {
  display: grid;
  grid-template-columns: 378px 1fr 261px;
  gap: 0;
  padding-bottom: 75px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  align-items: start;
  padding: 121px 120px 75px 121px;
}

/* 左侧品牌区 */
.footer-brand {
  min-width: 378px;
  max-width: 378px;
}

.footer-logo-wrap {
  display: flex;
  align-items: center;
  gap: 23px;
  margin-bottom: 12px;
}

.footer-logo-icon {
  object-fit: contain;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
}

.footer-brand-name {
  font-size: 29px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px
}

.footer-brand-sub {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
}

.footer-social-icons {
  display: flex;
  gap: 10px;
  margin-left: 85px;
}

.footer-social-icon {
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
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
  object-fit: contain;
}

/* 中间链接菜单 */
.footer-menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  width: 100%;
}

.footer-menu-grid .footer-menu-col {
  white-space: nowrap;
}

.footer-menu-grid .footer-menu-col:nth-child(1) {
  padding-right: 5%;
}

.footer-menu-grid .footer-menu-col:nth-child(2) {
  padding-right: 5%;
}

.footer-menu-grid .footer-menu-col:nth-child(3) {
  padding-right: 5%;
}

.footer-menu-grid .footer-menu-col:nth-child(4) {
  padding-right: 0;
}

.footer-menu-title {
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin-bottom: 39px;
  white-space: nowrap;
}

.footer-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu-list li {
  margin-bottom: 26px;
}

.footer-menu-list a {
  color: #929598;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s;
}

.footer-menu-list a:hover {
  color: #00D4ff;
}

/* 右侧二维码 */
.footer-qrcode {
  text-align: center;
  min-width: 261px;
  max-width: 261px;
}

.footer-qrcode-img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  overflow: hidden;
}

.footer-qrcode-text {
  font-size: 21px;
  color: #818587;
  /* margin: 2px 0; */
}

/* 底部信息栏 */
.footer-info-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 104px;
  padding: 41px 0;
  font-size: 17px;
  font-weight: 600;
  color: #919598;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* 版权信息 */
.footer-bottom {
  padding: 53px 0 0;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: #919598;
}

/* 响应式设计 */

/* 大中等屏幕 (1400px ~ 1600px) */
@media (max-width: 1600px) {
  .footer-main {
    grid-template-columns: 320px 1fr 220px;
    padding: 100px 8% 60px;
  }

  .footer-brand {
    min-width: 320px;
    max-width: 320px;
  }

  .footer-qrcode {
    min-width: 220px;
    max-width: 220px;
  }

  .footer-menu-grid {
    min-width: 0;
  }

  .footer-menu-grid .footer-menu-col:nth-child(1) {
    padding-right: 4%;
  }

  .footer-menu-grid .footer-menu-col:nth-child(2) {
    padding-right: 4%;
  }

  .footer-menu-grid .footer-menu-col:nth-child(3) {
    padding-right: 4%;
  }
}

/* 中等屏幕 (1200px ~ 1400px) */
@media (max-width: 1400px) {
  .footer {
    padding-bottom: 40px;
  }

  .footer-main {
    grid-template-columns: 300px 1fr 200px;
    gap: 20px;
    padding: 70px 6% 40px;
  }

  .footer-brand {
    min-width: 300px;
    max-width: 300px;
  }

  .footer-qrcode {
    min-width: 200px;
    max-width: 200px;
  }

  .footer-menu-grid {
    gap: 10px;
  }

  .footer-menu-grid .footer-menu-col:nth-child(1) {
    padding-right: 4%;
  }

  .footer-menu-grid .footer-menu-col:nth-child(2) {
    padding-right: 4%;
  }

  .footer-menu-grid .footer-menu-col:nth-child(3) {
    padding-right: 4%;
  }

  .footer-info-bar {
    gap: 25px;
    padding: 35px 0;
  }
}

/* 较小中等屏幕 (1024px ~ 1200px) */
@media (max-width: 1280px) {
  .footer {
    padding-bottom: 35px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
    padding: 60px 5% 35px;
  }

  .footer-brand {
    min-width: auto;
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-social-icons {
    margin-left: 0;
    margin-top: 20px;
  }

  .footer-menu-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 15px;
    max-width: none;
    margin: 0 auto;
    text-align: center;
  }

  .footer-menu-grid .footer-menu-col {
    white-space: nowrap;
  }

  .footer-menu-title {
    font-size: 20px;
    margin-bottom: 25px;
    white-space: nowrap;
  }

  .footer-menu-list li {
    margin-bottom: 18px;
  }

  .footer-menu-list a {
    font-size: 19px;
  }

  .footer-qrcode {
    min-width: auto;
    max-width: none;
  }

  .footer-info-bar {
    gap: 20px;
    padding: 30px 0;
    font-size: 16px;
  }
}

/* iPad / 平板 (768px ~ 1024px) */
@media (max-width: 1024px) {
  .footer-main {
    padding: 50px 5% 30px;
  }

  .footer-menu-title {
    font-size: 19px;
    margin-bottom: 20px;
  }

  .footer-menu-list li {
    margin-bottom: 14px;
  }

  .footer-menu-list a {
    font-size: 17px;
  }

  .footer-info-bar {
    flex-direction: column;
    gap: 8px;
    padding: 25px 0;
    font-size: 15px;
  }

  .footer-bottom {
    padding: 20px 0 0;
  }
}

/* 大iPad / 平板 (900px ~ 1024px) - removed, covered by 1024px query */

@media (max-width: 768px) {
  .footer {
    padding-bottom: 25px;
  }

  .footer-main {
    gap: 25px;
    padding: 40px 4% 25px;
  }

  .footer-menu-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 15px 10px;
    max-width: none;
    margin: 0 auto;
    text-align: center;
  }

  .footer-menu-title {
    font-size: 19px;
    margin-bottom: 18px;
    white-space: nowrap;
  }

  .footer-menu-list li {
    margin-bottom: 14px;
  }

  .footer-menu-list a {
    font-size: 17px;
  }

  .footer-qrcode {
    margin-top: 10px;
  }

  .footer-info-bar {
    padding: 20px 0;
    font-size: 15px;
  }

  .footer-bottom {
    padding: 20px 0 0;
    font-size: 16px;
  }
}

/* 小屏手机 (≤480px) */
@media (max-width: 480px) {
  .footer {
    padding-bottom: 20px;
  }

  .footer-main {
    gap: 20px;
    padding: 30px 3% 20px;
  }

  .footer-logo-wrap {
    gap: 15px;
  }

  .footer-brand-name {
    font-size: 24px;
  }

  .footer-menu-grid {
    grid-template-columns: 1fr 1fr;
    gap: 12px 8px;
    max-width: none;
    margin: 0 auto;
    text-align: center;
  }

  .footer-menu-title {
    font-size: 17px;
    margin-bottom: 15px;
    white-space: nowrap;
  }

  .footer-menu-list li {
    margin-bottom: 12px;
  }

  .footer-menu-list a {
    font-size: 16px;
  }

  .footer-qrcode-text {
    font-size: 17px;
  }

  .footer-info-bar {
    padding: 15px 0;
    font-size: 13px;
  }

  .footer-bottom {
    padding: 15px 0 0;
    font-size: 15px;
  }
}
</style>