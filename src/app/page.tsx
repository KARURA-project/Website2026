import { useTranslations } from 'next-intl';
import { Container, Eyebrow } from '@/components/ui';
import Countdown from '@/components/home/Countdown';
import HeroWithRover from '@/components/home/HeroWithRover';
import RoverHistory from '@/components/home/RoverHistory';
import TeamIntroduction from '@/components/home/TeamIntroduction';
import VideoReel from '@/components/home/VideoReel';
import DepartmentCard from '@/components/members/DepartmentCard';
import SponsorsCarousel from '@/components/sponsors/SponsorsCarousel';
import { departments } from '@/data/departments';
// News & Transmissions is disabled site-wide. To restore it on home, uncomment these two
// imports and <HomeTransmissions /> below.
// import HomeTransmissions from '@/components/home/HomeTransmissions';
// import { transmissions } from '@/data/transmissions';

// Logos for the home marquee (the /support page keeps its own list with links)
const sponsors = [
  { name: 'Sanso', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x740_v-frms_webp_47ab9e3a-894f-4fa5-ae7e-e04e6f6ff0a7_small.webp' },
  { name: 'Kikusui', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_35ab6be7-00ff-45b5-b575-6589198d4233_small.webp' },
  { name: 'Gutenberg', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1540x146_v-fms_webp_aa43e6b3-9a3b-4b50-8c88-5390ab14c413_small.webp' },
  { name: 'Thor Labs', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-295x50_webp_be9895b1-b65e-402e-9bb0-240a65478fca.png' },
  { name: 'rd-stuff', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-258x58_webp_24894403-8386-407c-9d6d-ef5b9594dc47.jpg' },
  { name: 'Yoshida', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-584x365_webp_52b3622e-bbc4-4f49-b4e4-50b5b1acb0f8.jpg' },
  { name: 'Sunhayato', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1290x210_v-fms_webp_9decbc0e-4bd0-4a93-9aa0-71eaa5db8cfa.png' },
  { name: 'Hiwin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_a7752d8d-06eb-465b-bcac-89b642aeef58.png' },
  { name: 'Argo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1602x500_v-fms_webp_37610fe1-46c9-438c-b91c-1004de53bc83.jpg' },
  { name: 'Tenchijin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1482x370_v-fms_webp_392f814c-2b0f-4bfa-9b98-a4c136832d54.png' },
  { name: 'Crecia', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x900_v-frms_webp_e4afed17-bd2a-46bb-bc4d-ac6e68d37be9.png' },
  { name: 'Daico', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3200x1000_v-frms_webp_7fe4f299-a096-4575-ac41-7a20efddc9ca.jpg' },
  { name: 'Igus', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2279x1182_v-frms_webp_6c74e893-da00-41e0-9e2f-bf2c784d07cf.jpg' },
  { name: 'Spacegoods', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-800x209_v-fs_webp_5abd98f2-f13a-48f4-924d-29d9c0312265.jpg' },
  { name: 'OptoSigma', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2048x512_v-frms_webp_553eb8dc-01cd-4074-80e0-ea1b8a0853f7.png' },
  { name: 'EMDgroup', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1632x306_v-fms_webp_f59ffa9a-87d1-4a09-82ab-a8135b4d55a4.png' },
  { name: 'Ni', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-175x132_webp_da483921-1bf0-406f-b34b-fbf224087591.jpg' },
  { name: 'Aerodiode', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-841x595_v-fs_webp_d5e15445-4abb-487c-b0b9-b88e7d251d0c.png' },
  { name: 'IDDK', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-850x850_v-fs_webp_e3e4575e-1057-4143-a29e-bde7a9ff5ea1.png' },
  { name: 'JA Pritech', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-610x97_v-fs_webp_a7dc40a6-bc2c-4fc2-a92b-03664e173b72.png' },
  { name: 'Maimanelectronics', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1240x315_v-fms_webp_2e90833f-321b-422a-bd35-fdc71833dbe1.png' },
  { name: 'Makita', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-591x197_webp_4a09a182-0ac1-498b-b287-61b17fa44b41.jpg' },
  { name: 'Haneda Innovation City', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4.png' },
  { name: 'Terminal 0', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-900x900_v-fs_webp_f39876b7-01b8-4f2a-aa81-8bc0b983fc95.jpg' },
  { name: 'Hull Precision Instrument', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x1354_v-frms_webp_43068a6f-92c5-44d7-ba69-3453867f0c6b.png' },
  { name: 'Amulapo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-666x140_v-fs_webp_c2904793-5b05-4517-8245-9c3657d440e2.png' },
  { name: 'Hanpu', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-967x300_v-fs_webp_438232d1-0256-4f1f-8401-f83b5fafbea8.jpg' },
  { name: 'Sinsyo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2154x236_v-frms_webp_316f9c06-5ada-4498-8776-b0159edc490d.jpg' },
  { name: 'Sugino', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x346_v-frms_webp_98a4e4ad-e8a8-4764-a861-b471d0281352.png' },
  { name: 'Task-Inc', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2103x855_v-frms_webp_fe6d0445-7cce-4fc3-9d9d-96b9e683d51c.jpg' },
  { name: 'Nikkan', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-850x108_v-fs_webp_0765e15f-61ca-47e4-b38f-8eb37689c551.png' },
  { name: 'Shinsu University', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-594x420_webp_13670535-e5d8-4813-9b82-346ff9d348f5.jpg' },
  { name: 'Toyama College', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-334x61_webp_716ef7e6-a45a-4d90-a695-c99cd429b4e7.png' },
  { name: 'Wakasatokai Shinsu University Engineering Alumni', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x614_v-frms_webp_c860e2b5-c352-4469-a960-4785968e3e98.png' },
  { name: 'UchuBiz', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1500x279_v-fms_webp_de41bd6a-1dcc-4c1d-a96a-fb8c634fd8ab.png' },
  { name: 'Sorae', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1920x480_v-frms_webp_601e4f16-3eb2-442b-b8b4-2a64277b460c.png' },
  { name: '佐々木亮の宇宙ばなし', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2009x460_v-frms_webp_2f46553c-1401-4a5a-b120-312a267561b0.png' },
  { name: 'Spacemedia', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x715_v-frms_webp_fa8c543d-fa10-4945-90fd-d741124f764d.png' },
  { name: 'Space Development Forum', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1425x595_v-fms_webp_ac9fdcb5-0676-4897-a792-980a765faf30.png' },
  { name: 'ASE-Lab', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1367x646_v-fms_webp_1fa915d6-1c48-4ed1-a601-4526eac61692.png' },
  { name: 'Innovation City', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-256x256_webp_fda42e6f-6d4a-4682-a1c4-866a5028a965.jpg' },
  { name: 'Lyncs', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1188x568_v-fs_webp_9ed63bcb-6917-4760-9158-4461e22c4ae4_small.webp' },
  { name: 'TohokuSpaceElevato', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x1697_v-frms_webp_39fe14e6-8f7b-45ad-be8a-a4e7dc79fe0b.png' },
  { name: 'Lift', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1020x1008_v-fs_webp_12e15f05-1cce-4a0c-807d-fa3dfcccf844.png' },
  { name: 'TelStar', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2118x772_v-frms_webp_08f97322-7734-40c9-81a3-5a18da2465b0.jpg' },
  { name: 'FSIF', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2048x2048_v-frms_webp_04afcf22-41a7-468c-8e61-966fa996210d.jpg' },
];

export default function Home() {
  const t = useTranslations('home.departments');

  return (
    <>
      <HeroWithRover />
      <VideoReel />
      <Countdown />
      <TeamIntroduction />
      <RoverHistory />

      {/* Departments — 3 on top, 2 below, hairline between cells */}
      <section className="py-24 bg-canvas border-t border-ink/8">
        <Container>
          <div className="mb-14">
            <Eyebrow className="mb-4">{t('eyebrow')}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{t('heading')}</h2>
          </div>

          {[departments.slice(0, 3), departments.slice(3)].map((row, i) => (
            <div key={i} className={`grid grid-cols-1 gap-px bg-ink/8 ${i === 0 ? 'md:grid-cols-3' : 'md:grid-cols-2 mt-px'}`}>
              {row.map((dept) => (
                <div key={dept.id} className="bg-canvas">
                  <DepartmentCard department={dept} />
                </div>
              ))}
            </div>
          ))}
        </Container>
      </section>

      {/* <HomeTransmissions transmissions={transmissions} /> */}

      <SponsorsCarousel sponsors={sponsors} />
    </>
  );
}