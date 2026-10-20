import { describe, expect, it } from 'vitest';
import { authErrorMessage } from './auth';

describe('authErrorMessage', () => {
  it('menerjemahkan galat Supabase yang umum', () => {
    expect(authErrorMessage('Invalid login credentials')).toBe('Email atau password salah.');
    expect(authErrorMessage('User already registered')).toMatch(/sudah terdaftar/);
    expect(authErrorMessage('Unsupported provider: provider is not enabled')).toMatch(/belum diaktifkan/);
    expect(authErrorMessage('email rate limit exceeded')).toMatch(/Terlalu banyak/);
    expect(authErrorMessage('TypeError: Failed to fetch')).toMatch(/koneksi/);
  });
  it('memberi pesan umum untuk galat tak dikenal', () => {
    expect(authErrorMessage('boom')).toBe('Terjadi kesalahan. Coba lagi sebentar lagi.');
  });
});
