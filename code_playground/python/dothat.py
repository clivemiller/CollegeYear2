import math

def pearson_r(x, y):
    if len(x) != len(y):
        raise ValueError("x and y must be same length")
    n = len(x)
    mx = sum(x) / n
    my = sum(y) / n
    sx = math.sqrt(sum((xi - mx)**2 for xi in x) / (n - 1))
    sy = math.sqrt(sum((yi - my)**2 for yi in y) / (n - 1))
    sxy = sum((xi - mx)*(yi - my) for xi, yi in zip(x, y)) / (n - 1)

    print("sxy:", sxy)
    print("sx:", sx)
    print("sy:", sy)
    
    return sxy / (sx * sy)

def main():
    X = [1360, 1940, 1750, 1550, 1790, 1750, 2230, 1600, 1450, 1870, 2210, 1480]
    Y = [78.5, 175.7, 139.5, 129.8, 95.6, 110.3, 260.5, 105.2, 88.6, 165.7, 225.3, 68.8]
    ans = pearson_r(X, Y)

    print(ans)

if __name__ == "__main__":
    main()