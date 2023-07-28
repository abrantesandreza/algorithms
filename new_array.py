# 1 - Implemente um método que crie um novo array baseado nos valores passados.
# Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

def criar_novo_array(tamanho, valor):
    novo_array = [valor for _ in range(tamanho)]
    return novo_array

# Exemplo de uso:
resultado = criar_novo_array(3, 'a')
print(resultado)
