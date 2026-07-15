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
              <li><a href="#">复合翼飞行平台</a></li>
              <li><a href="#">系留无人机</a></li>
              <li><a href="#">智能无人机指挥车</a></li>
              <li><a href="#">载荷配件</a></li>
            </ul>
          </div>
          <div class="footer-menu-col">
            <h4 class="footer-menu-title">解决方案</h4>
            <ul class="footer-menu-list">
              <li><a href="#">城市消防</a></li>
              <li><a href="#">森林消防</a></li>
              <li><a href="#">高空清洗</a></li>
              <li><a href="#">大疆全系挂载适配</a></li>
              <li><a href="#">科研定制服务</a></li>
            </ul>
          </div>
          <div class="footer-menu-col">
            <h4 class="footer-menu-title">服务支持</h4>
            <ul class="footer-menu-list">
              <li><a href="#">定制研发</a></li>
              <li><a href="#">技术支持</a></li>
              <li><a href="#">培训认证</a></li>
              <li><a href="#">售后保障</a></li>
              <li><a href="#">现场演示</a></li>
            </ul>
          </div>
          <div class="footer-menu-col">
            <h4 class="footer-menu-title">关于我们</h4>
            <ul class="footer-menu-list">
              <li><a href="#">关于我们</a></li>
              <li><a href="#">企业简介</a></li>
              <li><a href="#">发展历程</a></li>
              <li><a href="#">资质荣誉</a></li>
              <li><a href="#">新闻动态</a></li>
              <li><a href="#">加入我们</a></li>
            </ul>
          </div>
          <div class="footer-menu-col">
            <h4 class="footer-menu-title">服务支持</h4>
            <ul class="footer-menu-list">
              <li><a href="#">产品手册</a></li>
              <li><a href="#">技术白皮书</a></li>
              <li><a href="#">操作视频</a></li>
              <li><a href="#">常见问题</a></li>
              <li><a href="#">下载中心</a></li>
            </ul>
          </div>
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
        <span class="footer-info-divider"></span>
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
  padding-bottom: 50px;
}

/* 确保所有子元素使用思源黑体CN字体 */
.footer * {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.footer-main {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  align-items: start;
  padding: 80px 10% 40px
}

/* 左侧品牌区 */
.footer-brand {
  min-width: 120px;
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
  font-size: 21.5px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px
}

.footer-brand-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
}

.footer-social-icons {
  display: flex;
  gap: 10px;
  margin-left: 86px
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
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.footer-menu-title {
  font-size: 16.5px;
  font-weight: 600;
  color: white;
  margin-bottom: 39px;
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
  /* font-weight: 600; */
  transition: color 0.3s;
}

.footer-menu-list a:hover {
  color: #00D4ff;
}

/* 右侧二维码 */
.footer-qrcode {
  text-align: center;
  min-width: 120px;
}

.footer-qrcode-img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  overflow: hidden;
}

.footer-qrcode-text {
  font-size: 16px;
  color: #818587;
  /* margin: 2px 0; */
}

/* 底部信息栏 */
.footer-info-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
  font-size: 12.5px;
  font-weight: 600;
  color: #919598;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-info-divider {
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.2);
}

/* 版权信息 */
.footer-bottom {
  padding: 40px 0 0;
  text-align: center;
  font-size: 12.5px;
  font-weight: 600;
  color: #919598;
}

/* 响应式设计 */

/* 中等屏幕 (1200px ~ 1400px) */
@media (max-width: 1400px) {
  .footer {
    padding-bottom: 40px;
  }

  .footer-main {
    gap: 40px;
    padding: 70px 8% 40px
  }

  .footer-menu-grid {
    gap: 15px;
  }

  .footer-info-bar {
    gap: 25px;
    padding: 35px 0;
  }
}

/* 较小中等屏幕 (1024px ~ 1200px) */
@media (max-width: 1200px) {
  .footer {
    padding-bottom: 35px;
  }

  .footer-main {
    gap: 30px;
    padding: 60px 6% 35px;
  }

  .footer-menu-grid {
    gap: 12px;
  }

  .footer-menu-title {
    font-size: 15px;
    margin-bottom: 30px;
  }

  .footer-menu-list li {
    margin-bottom: 20px;
  }

  .footer-info-bar {
    gap: 20px;
    padding: 30px 0;
    font-size: 12px;
  }
}

/* iPad / 平板 (768px ~ 1024px) */
@media (max-width: 1024px) {
  .footer {
    padding-bottom: 30px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    padding: 60px 5% 30px;

  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-social-icons {
    margin-left: 0;
    margin-top: 20px;
  }

  .footer-menu-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  .footer-menu-grid>div:last-child,
  .footer-menu-grid>div:nth-child(4) {
    grid-column: span 1;
  }

  .footer-info-bar {
    flex-direction: column;
    gap: 10px;
    padding: 30px 0;
  }

  .footer-info-divider {
    display: none;
  }

  .footer-bottom {
    padding: 30px 0 0;
  }
}

@media (max-width: 768px) {
  .footer {
    padding-bottom:25px;
  }

  .footer-main {
    gap: 30px;
    padding: 50px 4% 25px;
  }

  .footer-menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .footer-menu-title {
    font-size: 15px;
    margin-bottom: 25px;
  }

  .footer-menu-list li {
    margin-bottom: 18px;
  }

  .footer-qrcode {
    margin-top: 10px;
  }

  .footer-info-bar {
    padding: 25px 0;
    font-size: 11px;
  }

  .footer-bottom {
    padding: 25px 0 0;
    font-size: 13px;
  }
}

/* 小屏手机 (≤480px) */
@media (max-width: 480px) {
  .footer {
    padding-bottom: 20px;
  }

  .footer-main {
    gap: 25px;
    padding: 40px 3% 20px;
  }

  .footer-logo-wrap {
    gap: 15px;
  }

  .footer-brand-name {
    font-size: 18px;
  }

  .footer-menu-grid {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .footer-menu-title {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .footer-menu-list li {
    margin-bottom: 15px;
  }

  .footer-menu-list a {
    font-size: 14px;
  }

  .footer-qrcode-text {
    font-size: 14px;
  }

  .footer-info-bar {
    padding: 20px 0;
    font-size: 10px;
  }

  .footer-bottom {
    padding: 20px 0 0;
    font-size: 12px;
  }
}
</style>