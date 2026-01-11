import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      {/* Start Page */}
      <section className="text-center my-12">
        <h1 className="text-6xl font-bold text-red-600">KARURA Project</h1>
      </section>

      {/* Sponsors Section */}
      <section className="text-center my-12 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x740_v-frms_webp_47ab9e3a-894f-4fa5-ae7e-e04e6f6ff0a7_small.webp" alt="Nippon Sanso Logo" />
          <img src="https://global.kikusui.co.jp/kiku/wp-content/uploads/2022/09/logo-kikusui-n.png" alt="Kikusui Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1482x370_v-fms_webp_392f814c-2b0f-4bfa-9b98-a4c136832d54_small.webp" alt="Tenchijin Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x900_v-frms_webp_e4afed17-bd2a-46bb-bc4d-ac6e68d37be9_small.webp" alt="Crecia Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_a7752d8d-06eb-465b-bcac-89b642aeef58_small.webp" alt="HIWIN Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-800x209_v-fs_webp_5abd98f2-f13a-48f4-924d-29d9c0312265_small.webp" alt="spacegoods.net Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1812x452_v-frms_webp_db352a0c-c6d2-4509-9518-9d34e1c6636a_small.webp" alt="OptoSigma Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-666x140_v-fs_webp_c2904793-5b05-4517-8245-9c3657d440e2_small.webp" alt="Amulapo Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2103x855_v-frms_webp_fe6d0445-7cce-4fc3-9d9d-96b9e683d51c_small.webp" alt="task-inc.tech Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1088x228_v-fs_webp_68261acd-1c79-40e8-8a5c-2d016f970f3b_small.webp" alt="Argocorp Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1540x146_v-fms_webp_aa43e6b3-9a3b-4b50-8c88-5390ab14c413_small.webp" alt="gutenberg.co Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4_small.webp" alt="Haneda Innovation City Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-900x900_v-fs_webp_f39876b7-01b8-4f2a-aa81-8bc0b983fc95_small.webp" alt="terminal.O Logo" />
          <img src="https://iddk.co.jp/app-def/S-102/iddk_wp/wp-content/uploads/2020/09/g892_88-1.png?1768110709" alt="IDDK Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x1354_v-frms_webp_43068a6f-92c5-44d7-ba69-3453867f0c6b_small.webp" alt="hullprecisioninstrument Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1632x306_v-fms_webp_f59ffa9a-87d1-4a09-82ab-a8135b4d55a4_small.webp" alt="emdgroup Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-967x300_v-fs_webp_438232d1-0256-4f1f-8401-f83b5fafbea8_small.webp" alt="Hanpu Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2154x236_v-frms_webp_316f9c06-5ada-4498-8776-b0159edc490d_small.webp" alt="Sinsyo Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x346_v-frms_webp_98a4e4ad-e8a8-4764-a861-b471d0281352_small.webp" alt="Sugino Logo" />
          <img src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-610x97_v-fs_webp_a7dc40a6-bc2c-4fc2-a92b-03664e173b72_small.webp" alt="japritech.co Logo" />
          
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto w-full text-center p-4 text-gray-500">
        © 2026 KARURA Project
      </footer>
    </main>
  )
}