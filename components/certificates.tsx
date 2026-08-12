import CertCards from "./ui/certificate";

const certificates = [
  {
    badge:
      "https://images.credly.com/size/680x680/images/f25ec9d4-c59d-49b9-944a-f160012e81cd/image.png",
    title: "Linux Unhatched",
    provider: "Cisco Networking Academy",
    date: "2026",
    link: "https://www.netacad.com/certificates/?issuanceId=2520f971-c3a8-4702-8898-c653e50eb88a",
  },
  {
    badge:
      "https://images.credly.com/size/680x680/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
    title: "Introduction to Data Science",
    provider: "Cisco Networking Academy",
    date: "2026",
    link: "https://www.netacad.com/certificates/?issuanceId=453152ca-a1ef-424d-811b-edcafcdc19fa",
  },
  {
    badge:
      "https://images.credly.com/size/680x680/images/88316fe8-5651-4e61-a6be-5be1558f049e/image.png",
    title: "Networking Devices and Initial Configuration",
    provider: "Cisco Networking Academy",
    date: "2026",
    link: "https://www.netacad.com/certificates/?issuanceId=e98ec7a0-298c-479f-8da0-af9182bcfeb6",
  },
  {
    badge:
      "https://images.credly.com/size/680x680/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png",
    title: "Endpoint Security",
    provider: "Cisco Networking Academy",
    date: "2026",
    link: "https://www.netacad.com/certificates/?issuanceId=67b9a370-ac89-4ef3-b816-8821a3fb6d9e",
  },
];

export default function Certificates() {
  return (
    <div className="flex flex-col gap-4">
      <p className="uppercase tracking-[0.5em] text-[clamp(0.65rem,1vw,0.8rem)]">
        Certificates
      </p>
      <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] line-clamp-2 font-bold">
        Certificates I have earned
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <CertCards key={index} {...cert} />
        ))}
      </div>
    </div>
  );
}
