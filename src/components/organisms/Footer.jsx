export default function Footer() {
  return (
    <footer class="py-10 sm:py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="flex-shrink-0 lg:flex lg:flex-col lg:justify-center">
            <div>
              <div class="flex items-center mb-4">
                <img src="assets/Logo.png" alt="Chill Logo" class="h-8 sm:h-12" />
              </div>
              <p class="text-gray-400 text-xs sm:text-sm">
                ©2025 Chill All Rights Reserved.
              </p>
            </div>
          </div>

          <div class="flex-1 grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
            <div>
              <h3 class="ttext-base sm:text-lg font-semibold mb-4 sm:mb-6">Genre</h3>
              <ul class="space-y-3 text-gray-300">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Aksi
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Anak-anak
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Anime
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Britania
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div class="h-6 mb-4 sm:mb-6"></div>
              <ul class="space-y-3 text-gray-300">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Drama
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Fantasi Ilmiah & Fantasi
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Kejahatan
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    KDrama
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div class="h-6 mb-4 sm:mb-6"></div>
              <ul class="space-y-3 text-gray-300">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Komedi
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Petualangan
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Perang
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Romantis
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div class="h-6 mb-6"></div>
              <ul class="space-y-3 text-gray-300">
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Sains & Alam
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Bantuan</h3>
              <ul class="space-y-3 text-gray-300">
                <li>
                  <a href="#" class="hover:text-white transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">Kontak Kami</a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">Privasi</a >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors">Syarat & Ketentuan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
