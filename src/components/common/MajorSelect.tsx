import React from 'react';
import { majors, type Major } from '../../data/majors';
import { Field } from './ui';

/** Pilihan jurusan ringkas untuk halaman yang membutuhkan konteks jurusan. */
export const MajorSelect: React.FC<{
  value: string;
  onChange: (id: string) => void;
  label?: string;
  hint?: string;
}> = ({ value, onChange, label = 'Rumpun jurusan', hint }) => (
  <Field label={label} hint={hint}>
    {(id) => (
      <select id={id} className="field" value={value} onChange={(e) => onChange(e.target.value)}>
        {majors.map((m) => (
          <option key={m.id} value={m.id}>
            {m.nama}
          </option>
        ))}
      </select>
    )}
  </Field>
);

/** Ambil jurusan efektif: pilihan pengguna → profil → jurusan pertama. */
export function resolveMajor(selectedId: string | null | undefined, profileId: string | undefined): Major {
  return majors.find((m) => m.id === selectedId) ?? majors.find((m) => m.id === profileId) ?? majors[0];
}
