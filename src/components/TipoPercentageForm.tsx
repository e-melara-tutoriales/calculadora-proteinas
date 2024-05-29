const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipoPercentageFormProps = {
  propina: number;
  setPropina: (propina: number) => void;
};

export default function TipoPercentageForm({
  propina,
  setPropina,
}: TipoPercentageFormProps) {
  return (
    <>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form>
        {tipOptions.map((tipo) => (
          <div className="flex gap-2" key={tipo.id}>
            <input
              onChange={(event) => setPropina(+event.target.value)}
              type="radio"
              id={tipo.id}
              name="tipo"
              value={tipo.value}
              checked={tipo.value === propina}
            />
            <label htmlFor={tipo.id}>{tipo.label}</label>
          </div>
        ))}
      </form>
    </>
  );
}
