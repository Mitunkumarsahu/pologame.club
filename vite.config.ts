import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.ico', '**/*.webp', '**/*.avif', '**/*.pdf', '**/*.zip', '**/*.rar', '**/*.7z', '**/*.tar', '**/*.gz', '**/*.bz2', '**/*.xz', '**/*.exe', '**/*.msi', '**/*.dmg', '**/*.pkg', '**/*.deb', '**/*.rpm', '**/*.apk', '**/*.ipa', '**/*.appx', '**/*.xap', '**/*.jar', '**/*.war', '**/*.ear', '**/*.swf', '**/*.flv', '**/*.f4v', '**/*.ogv', '**/*.ogg', '**/*.webm', '**/*.mp3', '**/*.wav', '**/*.flac', '**/*.aac', '**/*.m4a', '**/*.opus', '**/*.ttf', '**/*.otf', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.sfnt', '**/*.zip', '**/*.rar', '**/*.7z', '**/*.tar', '**/*.gz', '**/*.bz2', '**/*.xz', '**/*.exe', '**/*.msi', '**/*.dmg', '**/*.pkg', '**/*.deb', '**/*.rpm', '**/*.apk', '**/*.ipa', '**/*.appx', '**/*.xap', '**/*.jar', '**/*.war', '**/*.ear', '**/*.swf', '**/*.flv', '**/*.f4v', '**/*.ogv', '**/*.ogg', '**/*.webm', '**/*.mp3', '**/*.wav', '**/*.flac', '**/*.aac', '**/*.m4a', '**/*.opus', '**/*.ttf', '**/*.otf', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.sfnt', '**/*.zip', '**/*.rar', '**/*.7z', '**/*.tar', '**/*.gz', '**/*.bz2', '**/*.xz', '**/*.exe', '**/*.msi', '**/*.dmg', '**/*.pkg', '**/*.deb', '**/*.rpm', '**/*.apk', '**/*.ipa', '**/*.appx', '**/*.xap', '**/*.jar', '**/*.war', '**/*.ear', '**/*.swf', '**/*.flv', '**/*.f4v', '**/*.ogv', '**/*.ogg']
});
