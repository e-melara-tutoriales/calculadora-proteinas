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

export default function TipoPercentageForm() {
  return (
    <>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form>
        {tipOptions.map((tipo) => (
          <div className="flex gap-2">
            <input type="radio" id={tipo.id} name="tipo" value={tipo.value} />
            <label htmlFor={tipo.id}>{tipo.label}</label>
          </div>
        ))}
      </form>
    </>
  );
}
