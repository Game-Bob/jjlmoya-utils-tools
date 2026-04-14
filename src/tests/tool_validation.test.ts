import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { toolsCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 12 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(12);
    });

    it('toolsCategory should be defined', () => {
      expect(toolsCategory).toBeDefined();
      expect(toolsCategory.i18n).toBeDefined();
    });
  });
});

